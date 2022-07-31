import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Sub8ASchema = new Schema(
  {
    tahunLulus: String,
    jumlahLulusan: String,
    indexPrestasiKumulatif: {
      min: String,
      max: String,
      rataRata: String,
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8A = model("Sub8A", Sub8ASchema);

const Sub8B1Schema = new Schema(
  {
    namaKegiatan: String,
    waktuPerolehan: Number,
    tingkat: String,
    prestasiDicapai: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8B1 = model("Sub8B1", Sub8B1Schema);

const Sub8B2Schema = new Schema(
  {
    namaKegiatan: String,
    waktuPerolehan: Number,
    tingkat: String,
    prestasiDicapai: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8B2 = model("Sub8B2", Sub8B2Schema);

const Sub8CSchema = new Schema(
  {
    tahunMasuk: String,
    jumlahMahasiswaDiterima: Number,
    jumlahMahasiswaYangLulusPada: {
      TS6: Number,
      TS5: Number,
      TS4: Number,
      TS3: Number,
      TS2: Number,
      TS1: Number,
      TS: Number,
    },
    jumlahLulusanAkhir: { type: Number, default: 0 },
    rataRataMasaStudi: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8C = model("Sub8C", Sub8CSchema);

const Sub8D1Schema = new Schema(
  {
    tahunLulus: String,
    jumlahLulusan: Number,
    jumlahLulusanYangTerlacak: Number,
    jumlahLulusanDenganWaktuTunggu: {
      i: { type: Number, default: 0 },
      ii: { type: Number, default: 0 },
      iii: { type: Number, default: 0 },
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8D1 = model("Sub8D1", Sub8D1Schema);

const Sub8D2Schema = new Schema(
  {
    tahunLulus: String,
    jumlahLulusan: Number,
    jumlahLulusanYangTerlacak: Number,
    jumlahTingkatKesesuaian: {
      rendah: { type: Number, default: 0 },
      sedang: { type: Number, default: 0 },
      tinggi: { type: Number, default: 0 },
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8D2 = model("Sub8D2", Sub8D2Schema);

const Sub8E1Schema = new Schema(
  {
    tahunLulus: String,
    jumlahLulusan: Number,
    jumlahLulusanYangTerlacak: Number,
    jumlahBerdasarkanTingkat: {
      lokal: { type: Number, default: 0 },
      nasional: { type: Number, default: 0 },
      internasional: { type: Number, default: 0 },
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8E1 = model("Sub8E1", Sub8E1Schema);

const Sub8E2refSchema = new Schema(
  {
    tahunLulus: String,
    jumlahLulusan: { type: Number, default: 0 },
    jumlahKepuasanPenggunaYangTerlacak: { type: Number, default: 0 },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8E2ref = model("Sub8E2ref", Sub8E2refSchema);

const Sub8E2Schema = new Schema(
  {
    jenisKemampuan: String,
    tingkatKepuasanPengguna: {
      sangatBaik: Number,
      baik: Number,
      cukup: Number,
      kurang: Number,
    },
    rencanaTindakLanjut: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8E2 = model("Sub8E2", Sub8E2Schema);

const Sub8F11Schema = new Schema(
  {
    jenisPublikasi: String,
    jumlahJudul: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    virtuals: {
      jumlah: {
        get() {
          return (
            this.jumlahJudul.TS2 + this.jumlahJudul.TS1 + this.jumlahJudul.TS
          );
        },
      },
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Sub8F11 = model("Sub8F11", Sub8F11Schema);

const Sub8F12Schema = new Schema(
  {
    jenisPublikasi: String,
    jumlahJudul: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    virtuals: {
      jumlah: {
        get() {
          return (
            this.jumlahJudul.TS2 + this.jumlahJudul.TS1 + this.jumlahJudul.TS
          );
        },
      },
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Sub8F12 = model("Sub8F12", Sub8F12Schema);

const Sub8F2Schema = new Schema(
  {
    namaMahasiswa: String,
    judulArtikel: String,
    jumlahSitasi: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8F2 = model("Sub8F2", Sub8F2Schema);

const Sub8F3Schema = new Schema(
  {
    namaMahasiswa: String,
    namaProduk: String,
    deskripsiProduk: String,
    bukti: String,
    tahun: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8F3 = model("Sub8F3", Sub8F3Schema);

const Sub8F41Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8F41 = model("Sub8F41", Sub8F41Schema);

const Sub8F42Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8F42 = model("Sub8F42", Sub8F42Schema);

const Sub8F43Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8F43 = model("Sub8F43", Sub8F43Schema);

const Sub8F44Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Sub8F44 = model("Sub8F44", Sub8F44Schema);
