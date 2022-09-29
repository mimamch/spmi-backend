import jwt from "jsonwebtoken";
import { errorWithMessage } from "../../lib/response.js";
import User from "../models/users.js";

const isLogin = async (req, res, next) => {
  try {
    const token =
      req.session?.token || req.cookies?.token || req.headers?.token;
    if (!token)
      return res
        .status(400)
        .json(errorWithMessage("Akses Ditolak, Mohon Login Telebih Dahulu"));
    let decode;
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res.status(401).json(errorWithMessage("Token Invalid"));
    }
    if (!decode)
      return res
        .status(400)
        .json(errorWithMessage("Akses Ditolak, Mohon Login Telebih Dahulu"));
    const user = await User.findById(decode._id).select(
      "-visi -misi -tujuan -sasaran"
    );
    if (!user)
      return res
        .status(400)
        .json(errorWithMessage("Akses Ditolak, Mohon Login Ulang"));
    // const newToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY);
    // req.session.token = newToken;
    // res.cookie("token", newToken);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isLogin;
