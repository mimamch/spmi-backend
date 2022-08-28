import { errorWithMessage, successWithData } from "../../../lib/response.js";
import { Sub6A, Sub6B } from "../../models/sub6.js";

export const bagianA = async (req, res) => {
  try {
    const data = await Sub6A.find().populate("user", {
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
export const bagianB = async (req, res) => {
  try {
    const data = await Sub6B.find().populate("user", {
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
