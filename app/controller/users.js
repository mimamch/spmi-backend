import {
  errorWithMessage,
  successWithData,
  successWithMessage,
} from "../../lib/response.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, fullName, email, password } = req.body;
    const user = new User({
      username,
      fullName,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    const saved = await user.save();
    saved.password = undefined;
    res.json(successWithData(saved));
  } catch (error) {
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
    console.log(user);
    user = {
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);
    res.cookie("token", token, {
      httpOnly: true,
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
    if (!req.session.token && !req.cookies.token)
      return res
        .status(401)
        .json(errorWithMessage("Silahkan Login Telebih Dahulu"));

    const token = req.session.token || req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!data) return res.status(400).json(errorWithMessage("Token Invalid"));
    res.json(successWithData(data));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const getProfile = async (req, res) => {
  try {
    if (!req.session.token && !req.cookies.token)
      return res
        .status(401)
        .json(errorWithMessage("Silahkan Login Telebih Dahulu"));

    const token = req.session.token || req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!data) return res.status(400).json(errorWithMessage("Token Invalid"));
    const user = await User.findById(data._id);
    res.json(successWithData(user));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const editProfile = async (req, res) => {
  try {
    if (!req.session.token && !req.cookies.token)
      return res
        .status(401)
        .json(errorWithMessage("Silahkan Login Telebih Dahulu"));

    const token = req.session.token || req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!data) return res.status(400).json(errorWithMessage("Token Invalid"));
    const edit = await User.findByIdAndUpdate(
      data._id,
      {
        ...req.body,
      },
      { new: true }
    );

    res.json(successWithData(edit));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
