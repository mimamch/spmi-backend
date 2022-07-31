import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Sub5ASchema = new Schema(
  {
    mataKuliahKompetensi: { type: Booelan, default: false },
    bobot: {
      kuliah: { type: Number, default: 0 },
      seminar: { type: Number, default: 0 },
      praktikum: { type: Number, default: 0 },
    },
    konversiKreditKeJam: { type: Number, default: 0 },
    capaianPembelajaran: {
      sikap: { type: Booelan, default: false },
      pengetahuan: { type: Booelan, default: false },
      keterampilanUmum: { type: Booelan, default: false },
      keterampilanKhusus: { type: Booelan, default: false },
    },
    dokumenRencanaPembelajaran: String,
    unitPenyelenggara: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub5A = model("Sub5A", Sub5ASchema);

const Sub5BSchema = new Schema(
  {
    judulPenelitian: String,
    namaDosen: String,
    mataKuliah: String,
    bentukIntegrasi: String,
    tahun: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub5B = model("Sub5B", Sub5BSchema);

const Sub5CSchema = new Schema(
  {
    aspekYangDiukur: String,
    tingkatKepuasanMahasiswa: {
      sangatBaik: String,
      baik: String,
      cukup: String,
      kurang: String,
    },
    rencanaTindakLanjut: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub5C = model("Sub5B", Sub5CSchema);
