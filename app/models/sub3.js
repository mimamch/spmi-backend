import mongoose from "mongoose";
const { model, Schema } = mongoose;

// SUBSTANDAR 3 - A - 1 Dosen Tetap Perguruan Tinggi
const sub3bagA1Schema = new Schema(
  {
    namaDosen: String,
    nidn: { type: String, unique: true },
    pendidikanPascaSarjana: {
      magister: String,
      doktor: String,
    },
    bidangKeahlian: String,
    keseuaian: String,
    jabatanAkademik: String,
    sertifikatPendidikProfessional: String,
    sertifikatKompetensi: String,
    mataKuliahYangDiAmpuPadaPsAkreditasi: String,
    kesesuaianBidangKeahlian: String,
    mataKuliahYangDiAmpuPadaPsLain: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagA1 = model("Sub3BagA1", sub3bagA1Schema);

// SUBSTANDAR 3 - A - 2 Dosen Pembimbing Utama Tugas Akhir
const sub3bagA2Schema = new Schema(
  {
    namaDosen: String,
    jumlahMahasiswaYangDibimbing: {
      PsAkreditasi: {
        TS2: Number,
        TS1: Number,
        TS: Number,
        avg: Number,
      },
      PsLain: {
        TS2: Number,
        TS1: Number,
        TS: Number,
        avg: Number,
      },
    },
    rataRataJumlah: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagA2 = model("Sub3BagA2", sub3bagA2Schema);

// SUBSTANDAR 3 - A - 3 Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi
const sub3bagA3Schema = new Schema(
  {
    namaDosen: String,
    dtps: { type: Boolean, default: false },
    ewmp: {
      pendidikan: {
        psYangDiakreditasi: Number,
        psLainDalamPT: Number,
        psLainLuarPT: Number,
      },
      penelitian: Number,
      pkm: Number,
      tugasTambahan: Number,
    },
    jumlahSks: Number,
    rataRataSks: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagA3 = model("Sub3BagA3", sub3bagA3Schema);

// SUBSTANDAR 3 - A - 4 Dosen Tidak tetap
const sub3bagA4Schema = new Schema(
  {
    namaDosen: String,
    nidn: { type: String, unique: true },
    pendidikanPasca: String,
    bidangKeahlian: String,
    jabatanAkademik: String,
    sertifikatPendidikProfessional: String,
    sertifikatKompetensi: String,
    mataKuliahYangDiAmpuPadaPsAkreditasi: String,
    kesesuaianBidangKeahlian: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagA4 = model("Sub3BagA4", sub3bagA4Schema);

// SUBSTANDAR 3 - A - 5 Dosen Industri / Praktisi
const sub3bagA5Schema = new Schema(
  {
    namaDosen: String,
    pendidikanTertinggi: String,
    bidangKeahlian: String,
    nidk: { type: String, unique: true },
    mataKuliahYangDiAmpu: String,
    bobotKredit: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagA5 = model("Sub3BagA5", sub3bagA5Schema);

// SUBSTANDAR 3 - B - 1 Pengakuan / Rekognisi Dosen
const sub3bagB1Schema = new Schema(
  {
    namaDosen: String,
    bidangKeahlian: String,
    rekognisiDanBuktiPendukung: String,
    tingkat: String,
    tahun: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB1 = model("Sub3BagB1", sub3bagB1Schema);

// SUBSTANDAR 3 - B - 2 Penelitian DTPS
const sub3bagB2Schema = new Schema(
  {
    sumberPembiayaan: String,
    jumlahJudulPenelitian: {
      TS2: Number,
      TS1: Number,
      TS: Number,
    },
    jumlah: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB2 = model("Sub3BagB2", sub3bagB2Schema);
