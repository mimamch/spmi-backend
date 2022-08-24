import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Sub6ASchema = new Schema(
  {
    namaDosen: String,
    temaPenelitianSesuaiRoadMap: String,
    namaMahasiswa: String,
    judulKegiatan: String,
    tahun: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub6A = model("Sub6A", Sub6ASchema);

const Sub6BSchema = new Schema(
  {
    namaDosen: String,
    temaPenelitianSesuaiRoadMap: String,
    namaMahasiswa: String,
    judulTesis: String,
    tahun: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub6B = model("Sub6B", Sub6BSchema);
