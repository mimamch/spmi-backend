import mongoose from "mongoose";
const { model, Schema } = mongoose;

// SUBSTANDAR 2 - 1 Seleksi Mahasiswa Baru
const sub2bag1Schema = new Schema(
  {
    tahunAkademik: String,
    dayaTampung: Number,
    jumlahCalonMahasiswa: {
      pendaftar: Number,
      lulusSeleksi: Number,
    },
    jumlahMahasiswaBaru: {
      reguler: Number,
      transfer: Number,
    },
    jumlahMahasiswaAktif: {
      reguler: Number,
      transfer: Number,
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
    file: String,
  },
  {
    timestamps: true,
  }
);

// const sub2bag1Schema = new Schema(
//   {
//     tahunAkademik: String,
//     dayaTampung: Number,
//     jumlahCalonMahasiswa: mongoose.Mixed,
//     jumlahMahasiswaBaru: mongoose.Mixed,
//     jumlahMahasiswaAktif: mongoose.Mixed,
//     user: { type: mongoose.ObjectId, ref: "User" },
//     isAccepted: String,
// komentar: String,
//   },
//   {
//     timestamps: true,
//   }
// );

export const Sub2Bag1 = model("Sub2Bag1", sub2bag1Schema);

// SUBSTANDAR 2 - 2 Mahasiswa Asing
const sub2bag2Schema = new Schema(
  {
    programStudi: String,
    jumlahMahasiswaAktif: {
      TS2: Number,
      TS1: Number,
      TS: Number,
    },
    jumlahMahasiswaAsingPenuhWaktu: {
      TS2: Number,
      TS1: Number,
      TS: Number,
    },
    jumlahMahasiswaAsingParuhWaktu: {
      TS2: Number,
      TS1: Number,
      TS: Number,
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
    file: String,
  },
  {
    timestamps: true,
  }
);

export const Sub2Bag2 = model("Sub2Bag2", sub2bag2Schema);
