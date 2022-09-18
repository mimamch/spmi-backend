import {
  errorWithMessage,
  successWithData,
  successWithMessage,
} from "../../lib/response.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

export const signUp = async (req, res) => {
  try {
    const { username, fullName, email, password } = req.body;
    const user = new User({
      username,
      fullName,
      email,
      password: bcrypt.hashSync(password, 10),
      role: req.body.role,
    });
    const saved = await user.save();
    saved.password = undefined;
    res.json(successWithData(saved));
  } catch (error) {
    if (error.code === 11000 || error.code === 11001) {
      const dup = error.message
        .split(" ")
        .map((el, key, array) => el.includes("index:") && array[key + 1])
        .filter(Boolean)[0]
        .replace(/\_\d+/g, "");
      return res
        .status(409)
        .json({ status: false, message: `${dup} Sudah Terdaftar` });
    }
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({
      $or: [{ username: username }, { email: username }],
    }).select("+password");
    if (!user)
      return res.status(401).json(errorWithMessage("User Tidak Terdaftar"));
    const compare = bcrypt.compareSync(password, user.password);
    if (!compare)
      return res.status(401).json(errorWithMessage("Password Salah!"));
    user.password = undefined;
    user = {
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);
    res.cookie("token", token, {
      // httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    req.session.token = token;
    res.json(successWithData({ token }));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    req.session.destroy();
    res.json(successWithMessage("Berhasil Log Out"));
  } catch (error) {
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const Me = async (req, res) => {
  try {
    if (!req.session.token && !req.cookies.token && !req.headers.token)
      return res
        .status(401)
        .json(errorWithMessage("Silahkan Login Telebih Dahulu"));

    const token = req.session.token || req.cookies.token || req.headers.token;
    let data;
    try {
      data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res.status(401).json(errorWithMessage("Token Invalid"));
    }

    if (!data) return res.status(400).json(errorWithMessage("Token Invalid"));
    res.json(successWithData(data));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const getProfile = async (req, res) => {
  try {
    if (!req.session.token && !req.cookies.token && !req.headers.token)
      return res
        .status(401)
        .json(errorWithMessage("Silahkan Login Telebih Dahulu"));

    const token = req.session.token || req.cookies.token || req.headers.token;
    let data;
    try {
      data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res.status(401).json(errorWithMessage("Token Invalid"));
    }
    if (!data) return res.status(400).json(errorWithMessage("Token Invalid"));
    let user = await User.findById(data._id);
    if (user.waktuKadaluarsa) {
      user.waktuKadaluarsa = moment(user.waktuKadaluarsa).format("yyyy-MM-DD");
    }
    if (user.waktuPengusulan) {
      user.waktuPengusulan = moment(user.waktuPengusulan).format("yyyy-MM-DD");
    }
    res.json(successWithData(user));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const editProfile = async (req, res) => {
  try {
    if (!req.session.token && !req.cookies.token && !req.headers.token)
      return res
        .status(401)
        .json(errorWithMessage("Silahkan Login Telebih Dahulu"));

    const token = req.session.token || req.cookies.token || req.headers.token;

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    } else {
      req.body.password = undefined;
    }
    if (!req.body.waktuKadaluarsa) {
      req.body.waktuKadaluarsa = undefined;
    }
    if (!req.body.waktuPengusulan) {
      req.body.waktuPengusulan = undefined;
    }

    let data;
    try {
      data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res.status(401).json(errorWithMessage("Token Invalid"));
    }
    if (!data) return res.status(400).json(errorWithMessage("Token Invalid"));
    let visi = req.body.visi;
    let misi = req.body.misi;
    let tujuan = req.body.tujuan;
    let sasaran = req.body.sasaran;
    let createdAt = req.body.createdAt || new Date();

    delete req.body.visi;
    delete req.body.misi;
    delete req.body.tujuan;
    delete req.body.sasaran;
    const edit = await User.findByIdAndUpdate(
      data._id,
      {
        ...req.body,
        $push: {
          ...(visi && { visi: { data: visi, createdAt } }),
          ...(misi && { misi: { data: misi, createdAt } }),
          ...(tujuan && { tujuan: { data: tujuan, createdAt } }),
          ...(sasaran && { sasaran: { data: sasaran, createdAt } }),
        },
      },
      { new: true }
    );

    res.json(successWithData(edit));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const getAllUser = async (req, res) => {
  try {
    if (req.user.role != "admin")
      return res
        .status(403)
        .json(errorWithMessage("Anda Tidak Memiliki Akses!"));
    const users = await User.find();
    res.json(successWithData(users));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json(successWithMessage("Berhasil Menghapus User"));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
