import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  fullName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, select: false },
  role: {
    type: String,
    enum: ["admin", "prodi"],
    default: "admin",
    required: true,
  },
});

export default model("User", userSchema);
