import { errorWithMessage, successWithData } from "../../../lib/response.js";
import { Sub2Bag1, Sub2Bag2 } from "../../models/sub2.js";

export const bagian1 = async (req, res) => {
  try {
    const data = await Sub2Bag1.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      unverif: 0,
    };
    let dayaTampung = {};
    let pengirim = {};
    let jumlahCalonMahasiswa = {
      pendaftar: 0,
      lulusSeleksi: 0,
    };
    let jumlahMahasiswaBaru = {
      reguler: 0,
      transfer: 0,
    };
    let jumlahMahasiswaAktif = {
      reguler: 0,
      transfer: 0,
    };
    data.map((e) => {
      e.isAccepted && e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.unverif++;
      if (e.user) {
        pengirim[e.user.fullName]
          ? pengirim[e.user.fullName]++
          : (pengirim[e.user.fullName] = 1);
      }

      dayaTampung[e.tahunAkademik]
        ? (dayaTampung[e.tahunAkademik] += e.dayaTampung)
        : (dayaTampung[e.tahunAkademik] = e.dayaTampung);

      jumlahCalonMahasiswa.pendaftar += e.jumlahCalonMahasiswa.pendaftar;
      jumlahCalonMahasiswa.lulusSeleksi += e.jumlahCalonMahasiswa.lulusSeleksi;

      jumlahMahasiswaBaru.reguler += e.jumlahMahasiswaBaru.reguler;
      jumlahMahasiswaBaru.transfer += e.jumlahMahasiswaBaru.transfer;

      jumlahMahasiswaAktif.reguler += e.jumlahMahasiswaAktif.reguler;
      jumlahMahasiswaAktif.transfer += e.jumlahMahasiswaAktif.transfer;
    });

    let finalData = {
      dayaTampung,
      statusVerifikasi,
      pengirim,
      jumlahCalonMahasiswa,
      jumlahMahasiswaBaru,
      jumlahMahasiswaAktif,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const bagian2 = async (req, res) => {
  try {
    const data = await Sub2Bag2.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      unverif: 0,
    };
    let jumlahMahasiswaAktif = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };
    let jumlahMahasiswaAsingPenuhWaktu = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };
    let jumlahMahasiswaAsingParuhWaktu = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };
    let pengirim = {};
    data.map((e) => {
      e.isAccepted && e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.unverif++;
      if (e.user) {
        pengirim[e.user.fullName]
          ? pengirim[e.user.fullName]++
          : (pengirim[e.user.fullName] = 1);
      }
      jumlahMahasiswaAktif.TS2 += e.jumlahMahasiswaAktif.TS2;
      jumlahMahasiswaAktif.TS1 += e.jumlahMahasiswaAktif.TS1;
      jumlahMahasiswaAktif.TS += e.jumlahMahasiswaAktif.TS;

      jumlahMahasiswaAsingPenuhWaktu.TS2 +=
        e.jumlahMahasiswaAsingPenuhWaktu.TS2;
      jumlahMahasiswaAsingPenuhWaktu.TS1 +=
        e.jumlahMahasiswaAsingPenuhWaktu.TS1;
      jumlahMahasiswaAsingPenuhWaktu.TS += e.jumlahMahasiswaAsingPenuhWaktu.TS;
      jumlahMahasiswaAsingParuhWaktu.TS2 +=
        e.jumlahMahasiswaAsingParuhWaktu.TS2;
      jumlahMahasiswaAsingParuhWaktu.TS1 +=
        e.jumlahMahasiswaAsingParuhWaktu.TS1;
      jumlahMahasiswaAsingParuhWaktu.TS += e.jumlahMahasiswaAsingParuhWaktu.TS;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,

      jumlahMahasiswaAsingPenuhWaktu,
      jumlahMahasiswaAsingParuhWaktu,
      jumlahMahasiswaAktif,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
