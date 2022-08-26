import { errorWithMessage, successWithData } from "../../../lib/response.js";
import { Sub3BagA1 } from "../../models/sub3.js";

export const bagianA1 = async (req, res) => {
  try {
    const data = await Sub3BagA1.find().populate("user", {
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
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};

export const bagianA2 = async (req, res) => {
  try {
    const data = await Sub3BagA1.find().populate("user", {
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

    let pengirim = {};
    let jumlahMahasiswaYangDibimbing = {
      PsAkreditasi: {
        TS2: 0,
        TS1: 0,
        TS: 0,
      },
      PsLain: {
        TS2: 0,
        TS1: 0,
        TS: 0,
      },
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

      jumlahMahasiswaYangDibimbing.PsAkreditasi.TS2 +=
        e.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS2;
      jumlahMahasiswaYangDibimbing.PsAkreditasi.TS1 +=
        e.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS1;
      jumlahMahasiswaYangDibimbing.PsAkreditasi.TS +=
        e.jumlahMahasiswaYangDibimbing.PsAkreditasi.TS;

      jumlahMahasiswaYangDibimbing.PsLain.TS2 +=
        e.jumlahMahasiswaYangDibimbing.PsLain.TS2;
      jumlahMahasiswaYangDibimbing.PsLain.TS1 +=
        e.jumlahMahasiswaYangDibimbing.PsLain.TS1;
      jumlahMahasiswaYangDibimbing.PsLain.TS +=
        e.jumlahMahasiswaYangDibimbing.PsLain.TS;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahMahasiswaYangDibimbing,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianA3 = async (req, res) => {
  try {
    const data = await Sub3BagA1.find().populate("user", {
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

    let pengirim = {};
    let ewmp = {
      pendidikan: 0,
      penelitian: 0,
      pkm: 0,
      tugasTambahan: 0,
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

      ewmp.pendidikan +=
        e.ewmp.pendidikan.psYangDiakreditasi +
        e.ewmp.pendidikan.psLainDalamPT +
        e.ewmp.pendidikan.psLainLuarPT;
      ewmp.penelitian += e.ewmp.penelitian;
      ewmp.pkm += e.ewmp.pkm;
      ewmp.tugasTambahan += e.ewmp.tugasTambahan;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      ewmp,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
