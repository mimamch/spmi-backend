import { errorWithMessage, successWithData } from "../../../lib/response.js";
import { Sub5A, Sub5B, Sub5C } from "../../models/sub5.js";

export const bagianA = async (req, res) => {
  try {
    const data = await Sub5A.find().populate("user", {
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

    let bobot = {
      kuliah: 0,
      seminar: 0,
      praktikum: 0,
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

      bobot.kuliah += e.bobot.kuliah;
      bobot.seminar += e.bobot.seminar;
      bobot.praktikum += e.bobot.praktikum;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      bobot,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB = async (req, res) => {
  try {
    const data = await Sub5B.find().populate("user", {
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
export const bagianC = async (req, res) => {
  try {
    const data = await Sub5C.find().populate("user", {
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

    let tingkatKepuasanMahasiswa = {
      sangatBaik: 0,
      baik: 0,
      cukup: 0,
      kurang: 0,
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

      tingkatKepuasanMahasiswa.sangatBaik += Number(
        e.tingkatKepuasanMahasiswa.sangatBaik
      );
      tingkatKepuasanMahasiswa.baik += Number(e.tingkatKepuasanMahasiswa.baik);
      tingkatKepuasanMahasiswa.cukup += Number(
        e.tingkatKepuasanMahasiswa.cukup
      );
      tingkatKepuasanMahasiswa.kurang += Number(
        e.tingkatKepuasanMahasiswa.kurang
      );
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      tingkatKepuasanMahasiswa,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
