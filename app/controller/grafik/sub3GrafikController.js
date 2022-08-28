import { errorWithMessage, successWithData } from "../../../lib/response.js";
import {
  Sub3BagA1,
  Sub3BagA2,
  Sub3BagA3,
  Sub3BagA4,
  Sub3BagA5,
  Sub3BagB1,
  Sub3BagB2,
  Sub3BagB3,
  Sub3BagB41,
  Sub3BagB42,
  Sub3BagB5,
  Sub3BagB6,
  Sub3BagB71,
  Sub3BagB72,
  Sub3BagB73,
  Sub3BagB74,
} from "../../models/sub3.js";

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
    const data = await Sub3BagA2.find().populate("user", {
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
    const data = await Sub3BagA3.find().populate("user", {
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
export const bagianA4 = async (req, res) => {
  try {
    const data = await Sub3BagA4.find().populate("user", {
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
export const bagianA5 = async (req, res) => {
  try {
    const data = await Sub3BagA5.find().populate("user", {
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
export const bagianB1 = async (req, res) => {
  try {
    const data = await Sub3BagB1.find().populate("user", {
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
export const bagianB2 = async (req, res) => {
  try {
    const data = await Sub3BagB2.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let jumlahJudulPenelitian = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
      jumlahJudulPenelitian.TS2 += e.jumlahJudulPenelitian.TS2;
      jumlahJudulPenelitian.TS1 += e.jumlahJudulPenelitian.TS1;
      jumlahJudulPenelitian.TS += e.jumlahJudulPenelitian.TS;
    });

    let finalData = {
      jumlahJudulPenelitian,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB3 = async (req, res) => {
  try {
    const data = await Sub3BagB3.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let jumlahJudulPKM = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
      jumlahJudulPKM.TS2 += e.jumlahJudulPKM.TS2;
      jumlahJudulPKM.TS1 += e.jumlahJudulPKM.TS1;
      jumlahJudulPKM.TS += e.jumlahJudulPKM.TS;
    });

    let finalData = {
      jumlahJudulPKM,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB41 = async (req, res) => {
  try {
    const data = await Sub3BagB41.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let jumlahJudul = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
      jumlahJudul.TS2 += e.jumlahJudul.TS2;
      jumlahJudul.TS1 += e.jumlahJudul.TS1;
      jumlahJudul.TS += e.jumlahJudul.TS;
    });

    let finalData = {
      jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB42 = async (req, res) => {
  try {
    const data = await Sub3BagB42.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    let jumlahJudul = {
      TS2: 0,
      TS1: 0,
      TS: 0,
    };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
      jumlahJudul.TS2 += e.jumlahJudul.TS2;
      jumlahJudul.TS1 += e.jumlahJudul.TS1;
      jumlahJudul.TS += e.jumlahJudul.TS;
    });

    let finalData = {
      jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB5 = async (req, res) => {
  try {
    const data = await Sub3BagB5.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    // let jumlahJudul = {
    //   TS2: 0,
    //   TS1: 0,
    //   TS: 0,
    // };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });
    // jumlahJudul.TS2 += e.jumlahJudul.TS2;
    // jumlahJudul.TS1 += e.jumlahJudul.TS1;
    // jumlahJudul.TS += e.jumlahJudul.TS;

    let finalData = {
      // jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB6 = async (req, res) => {
  try {
    const data = await Sub3BagB6.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    // let jumlahJudul = {
    //   TS2: 0,
    //   TS1: 0,
    //   TS: 0,
    // };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });
    // jumlahJudul.TS2 += e.jumlahJudul.TS2;
    // jumlahJudul.TS1 += e.jumlahJudul.TS1;
    // jumlahJudul.TS += e.jumlahJudul.TS;

    let finalData = {
      // jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB71 = async (req, res) => {
  try {
    const data = await Sub3BagB71.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    // let jumlahJudul = {
    //   TS2: 0,
    //   TS1: 0,
    //   TS: 0,
    // };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });
    // jumlahJudul.TS2 += e.jumlahJudul.TS2;
    // jumlahJudul.TS1 += e.jumlahJudul.TS1;
    // jumlahJudul.TS += e.jumlahJudul.TS;

    let finalData = {
      // jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB72 = async (req, res) => {
  try {
    const data = await Sub3BagB72.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    // let jumlahJudul = {
    //   TS2: 0,
    //   TS1: 0,
    //   TS: 0,
    // };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });
    // jumlahJudul.TS2 += e.jumlahJudul.TS2;
    // jumlahJudul.TS1 += e.jumlahJudul.TS1;
    // jumlahJudul.TS += e.jumlahJudul.TS;

    let finalData = {
      // jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB73 = async (req, res) => {
  try {
    const data = await Sub3BagB73.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    // let jumlahJudul = {
    //   TS2: 0,
    //   TS1: 0,
    //   TS: 0,
    // };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });
    // jumlahJudul.TS2 += e.jumlahJudul.TS2;
    // jumlahJudul.TS1 += e.jumlahJudul.TS1;
    // jumlahJudul.TS += e.jumlahJudul.TS;

    let finalData = {
      // jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagianB74 = async (req, res) => {
  try {
    const data = await Sub3BagB74.find().populate("user", {
      visi: 0,
      misi: 0,
      tujuan: 0,
      sasaran: 0,
    });

    // let jumlahJudul = {
    //   TS2: 0,
    //   TS1: 0,
    //   TS: 0,
    // };

    let userCount = {};
    let statusVerifikasi = {
      accepted: 0,
      declined: 0,
      notVerified: 0,
    };
    data.map((e, i) => {
      userCount[e.user.fullName]
        ? userCount[e.user.fullName]++
        : (userCount[e.user.fullName] = 1);
      e.isAccepted == "accepted"
        ? statusVerifikasi.accepted++
        : e.isAccepted == "declined"
        ? statusVerifikasi.declined++
        : statusVerifikasi.notVerified++;
    });
    // jumlahJudul.TS2 += e.jumlahJudul.TS2;
    // jumlahJudul.TS1 += e.jumlahJudul.TS1;
    // jumlahJudul.TS += e.jumlahJudul.TS;

    let finalData = {
      // jumlahJudul,
      userCount,
      statusVerifikasi,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
