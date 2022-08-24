import mongoose from "mongoose";
const { model, Schema } = mongoose;

// BAGIAN 1 - Kerjasama Pendidikan
const sub1bag1Schema = new Schema(
  {
    lembagaMitra: String,
    tingkat: String,
    judulKegiatan: String,
    manfaat: String,
    waktuDanDurasi: String,
    buktiKerjasama: String,
    tahunBerakhir: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub1Bag1 = model("Sub1Bag1", sub1bag1Schema);

// BAGIAN 2 - Kerjasama Penelitian
const sub1bag2Schema = new Schema(
  {
    lembagaMitra: String,
    tingkat: String,
    judulKegiatan: String,
    manfaat: String,
    waktuDanDurasi: String,
    buktiKerjasama: String,
    tahunBerakhir: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub1Bag2 = model("Sub1Bag2", sub1bag2Schema);

// BAGIAN 3 - Kerjasama Pengabdian Kepada Masyarakat
const sub1bag3Schema = new Schema(
  {
    lembagaMitra: String,
    tingkat: String,
    judulKegiatan: String,
    manfaat: String,
    waktuDanDurasi: String,
    buktiKerjasama: String,
    tahunBerakhir: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub1Bag3 = model("Sub1Bag3", sub1bag3Schema);
