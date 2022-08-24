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
    isAccepted: String,
    komentar: String,
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
        TS2: { type: Number, default: 0 },
        TS1: { type: Number, default: 0 },
        TS: { type: Number, default: 0 },
        // avg: {type: Number, default: 0},
      },
      PsLain: {
        TS2: { type: Number, default: 0 },
        TS1: { type: Number, default: 0 },
        TS: { type: Number, default: 0 },
        // avg: {type: Number, default: 0},
      },
    },
    // rataRataJumlah: {type: Number, default: 0},
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
    virtuals: {
      avgPsAkreditasi: {
        get() {
          return (
            (this.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS2 +
              this.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS1 +
              this.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS) /
            3
          );
        },
      },
      avgPsLain: {
        get() {
          return (
            (this.jumlahMahasiswaYangDibimbing.PsLain.TS2 +
              this.jumlahMahasiswaYangDibimbing.PsLain.TS1 +
              this.jumlahMahasiswaYangDibimbing.PsLain.TS) /
            3
          );
        },
      },
      avgJumlah: {
        get() {
          return (
            (this.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS2 +
              this.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS1 +
              this.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS +
              this.jumlahMahasiswaYangDibimbing.PsLain.TS2 +
              this.jumlahMahasiswaYangDibimbing.PsLain.TS1 +
              this.jumlahMahasiswaYangDibimbing.PsLain.TS) /
            6
          );
        },
      },
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
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
    // jumlahSks: Number,
    // rataRataSks: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
    virtuals: {
      jumlahSks: {
        get() {
          return (
            this.ewmp.pendidikan.psYangDiakreditasi +
            this.ewmp.pendidikan.psLainDalamPT +
            this.ewmp.pendidikan.psLainLuarPT +
            this.ewmp.penelitian +
            this.ewmp.pkm +
            this.ewmp.tugasTambahan
          );
        },
      },
      rataRataSks: {
        get() {
          return this.jumlahSks / 2;
        },
      },
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
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
    isAccepted: String,
    komentar: String,
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
    isAccepted: String,
    komentar: String,
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
    isAccepted: String,
    komentar: String,
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
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    // jumlah: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
    virtuals: {
      jumlah: {
        get() {
          return (
            this.jumlahJudulPenelitian.TS1 +
            this.jumlahJudulPenelitian.TS2 +
            this.jumlahJudulPenelitian.TS
          );
        },
      },
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const Sub3BagB2 = model("Sub3BagB2", sub3bagB2Schema);

// SUBSTANDAR 3 - B - 3 PkM DTPS
const sub3bagB3Schema = new Schema(
  {
    sumberPembiayaan: String,
    jumlahJudulPKM: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    // jumlah: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
    virtuals: {
      jumlah: {
        get() {
          return (
            this.jumlahJudulPKM.TS1 +
            this.jumlahJudulPKM.TS2 +
            this.jumlahJudulPKM.TS
          );
        },
      },
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const Sub3BagB3 = model("Sub3BagB3", sub3bagB3Schema);

// SUBSTANDAR 3 - B - 4 - 1 Publikasi Ilmiah DTPS
const sub3bagB41Schema = new Schema(
  {
    jenisPublikasi: String,
    jumlahJudul: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    // jumlah: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
    virtuals: {
      jumlah: {
        get() {
          return (
            this.jumlahJudul.TS1 + this.jumlahJudul.TS2 + this.jumlahJudul.TS
          );
        },
      },
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const Sub3BagB41 = model("Sub3BagB41", sub3bagB41Schema);

// SUBSTANDAR 3 - B - 4 - 2 Publikasi Ilmiah DTPS
const sub3bagB42Schema = new Schema(
  {
    jenisPublikasi: String,
    jumlahJudul: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    // jumlah: () => {
    //   return this.jumlahJudul.TS1 + this.jumlahJudul.TS2 + this.jumlahJudulTS;
    // },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
    virtuals: {
      jumlah: {
        get() {
          return (
            this.jumlahJudul.TS1 + this.jumlahJudul.TS2 + this.jumlahJudul.TS
          );
        },
      },
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const Sub3BagB42 = model("Sub3BagB42", sub3bagB42Schema);

// SUBSTANDAR 3 - B - 5 Karya Ilmiah DTPS yang Disitasi
const sub3bagB5Schema = new Schema(
  {
    namaDosen: String,
    judulArtikel: String,
    jumlahSitasi: { type: Number, default: 0 },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB5 = model("Sub3BagB5", sub3bagB5Schema);

// SUBSTANDAR 3 - B - 6 Tabel 3.b.6) Produk/Jasa DTPS yang Diadopsi oleh Industri/Masyarakat
const sub3bagB6Schema = new Schema(
  {
    namaDosen: String,
    namaProduk: String,
    deskripsiProduk: String,
    bukti: String,
    tahun: Number,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB6 = model("Sub3BagB6", sub3bagB6Schema);

// SUBSTANDAR 3 - B - 7 - 1 Tabel 3.b.7) Luaran Penelitian/PkM Lainnya oleh DTPS
const sub3bagB71Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB71 = model("Sub3BagB71", sub3bagB71Schema);

// SUBSTANDAR 3 - B - 7 - 2 Tabel 3.b.7) Bagian-2 HKI (Hak Cipta, Desain Produk Industri, dll.)
const sub3bagB72Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB72 = model("Sub3BagB72", sub3bagB72Schema);

// SUBSTANDAR 3 - B - 7 - 3 Tabel 3.b.7) Bagian-3 Teknologi Tepat Guna, Produk, Karya Seni, Rekayasa Sosial
const sub3bagB73Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB73 = model("Sub3BagB73", sub3bagB73Schema);

// SUBSTANDAR 3 - B - 7 - 4 Tabel 3.b.7) Bagian-4 Buku Ber-ISBN, Book Chapter
const sub3bagB74Schema = new Schema(
  {
    luaranPenelitian: String,
    tahun: Number,
    keterangan: String,
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
  },
  {
    timestamps: true,
  }
);

export const Sub3BagB74 = model("Sub3BagB74", sub3bagB74Schema);
