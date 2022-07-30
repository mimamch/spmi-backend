import { errorWithMessage, successWithData } from "../../lib/response.js";
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
    const { username, email, password } = req.body;
    const user = await User.findOne({
      $or: [{ username }, { email }],
    }).select("+password");
    if (!user) return res.json(errorWithMessage("User Tidak Terdaftar"));
    const compare = bcrypt.compareSync(password, user.password);
    if (!compare) return res.json(errorWithMessage("Password Salah!"));
    user.password = undefined;
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY, {
      expiresIn: 1000,
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 });
    req.session.token = token;
    res.json(successWithData({ token }));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const Me = async (req, res) => {
  try {
    console.log(req.session.token);
    if (!req.session.token && !req.cookies.token)
      return res
        .status(400)
        .json(errorWithMessage("Silahkan Login Telebih Dauhulu"));

    const token = req.session.token || req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    res.json(successWithData(data));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
