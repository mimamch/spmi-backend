import mongoose from "mongoose";
const { model, Schema } = mongoose;

// SUBSTANDAR 2 - 1 Seleksi Mahasiswa Baru
const sub2bag1Schema = new Schema({
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
});

export const Sub2Bag1 = model("Sub2Bag1", sub2bag1Schema);

// SUBSTANDAR 2 - 2 Mahasiswa Asing
const sub2bag2Schema = new Schema({
  programStudi: String,
  jumlahMahasiswaAktif: {},
  jumlahMahasiswaAsingPenuhWaktu: {},
  jumlahMahasiswaAsingParuhWaktu,
});

export const Sub2Bag2 = model("Sub2Bag1", sub2bag2Schema);
