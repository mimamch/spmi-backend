import { errorWithMessage, successWithData } from "../../../lib/response.js";
import { Sub1Bag1, Sub1Bag2, Sub1Bag3 } from "../../models/sub1.js";

export const bagian1 = async (req, res) => {
  try {
    const data = await Sub1Bag1.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let tingkat = {
      Lokal: 0,
      Nasional: 0,
      Internasional: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      tingkat[e.tingkat] ? tingkat[e.tingkat]++ : (tingkat[e.tingkat] = 1);

      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });

    let finalData = {
      tingkat,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian2 = async (req, res) => {
  try {
    const data = await Sub1Bag2.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let tingkat = {
      Lokal: 0,
      Nasional: 0,
      Internasional: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      tingkat[e.tingkat] ? tingkat[e.tingkat]++ : (tingkat[e.tingkat] = 1);

      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });

    let finalData = {
      tingkat,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian3 = async (req, res) => {
  try {
    const data = await Sub1Bag3.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let tingkat = {
      Lokal: 0,
      Nasional: 0,
      Internasional: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      tingkat[e.tingkat] ? tingkat[e.tingkat]++ : (tingkat[e.tingkat] = 1);

      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });

    let finalData = {
      tingkat,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
