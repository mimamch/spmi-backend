import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Sub7Schema = new Schema(
  {
    namaDosen: String,
    temaPKMSesuaiRoadMap: String,
    namaMahasiswa: String,
    judulKegiatan: String,
    tahun: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub7 = model("Sub7", Sub7Schema);
