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
  visi: String,
  misi: String,
  tujuan: String,
  sasaran: String,

  jenisProgram: String,
  predikatAkreditasiPs: String,
  nomorSK: String,
  waktuKadaluarsa: Date,
  namaUnitPengelola: String,
  namaPerguruanTinggi: String,
  alamat: {
    jalan: String,
    kodepos: String,
    kota: String,
    negara: String,
  },
  noHp: String,
  website: String,
  ts: String,
  namaPengusul: String,
  waktuPengusulan: Date,
});

export default model("User", userSchema);
