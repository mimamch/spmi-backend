import { errorWithMessage, successWithData } from "../../../lib/response.js";
import {
  Sub8A,
  Sub8B1,
  Sub8B2,
  Sub8C,
  Sub8D1,
  Sub8D2,
  Sub8E1,
  Sub8E2,
  Sub8E2ref,
  Sub8F11,
  Sub8F12,
  Sub8F2,
  Sub8F3,
  Sub8F41,
  Sub8F42,
  Sub8F43,
  Sub8F44,
} from "../../models/sub8.js";

export const bagian8A = async (req, res) => {
  try {
    const data = await Sub8A.find().populate("user", {
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
export const bagian8B1 = async (req, res) => {
  try {
    const data = await Sub8B1.find().populate("user", {
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

    let tingkat = {
      Internasional: 0,
      Nasional: 0,
      Lokal: 0,
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

      tingkat[e.tingkat]++;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      tingkat,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8B2 = async (req, res) => {
  try {
    const data = await Sub8B2.find().populate("user", {
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

    let tingkat = {
      Internasional: 0,
      Nasional: 0,
      Lokal: 0,
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

      tingkat[e.tingkat]++;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      tingkat,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8C = async (req, res) => {
  try {
    const data = await Sub8C.find().populate("user", {
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

    let jumlahMahasiswaYangLulusPada = {
      TS6: 0,
      TS5: 0,
      TS4: 0,
      TS3: 0,
      TS2: 0,
      TS1: 0,
      TS: 0,
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

      jumlahMahasiswaYangLulusPada.TS6 += e.jumlahMahasiswaYangLulusPada.TS6;
      jumlahMahasiswaYangLulusPada.TS5 += e.jumlahMahasiswaYangLulusPada.TS5;
      jumlahMahasiswaYangLulusPada.TS4 += e.jumlahMahasiswaYangLulusPada.TS4;
      jumlahMahasiswaYangLulusPada.TS3 += e.jumlahMahasiswaYangLulusPada.TS3;
      jumlahMahasiswaYangLulusPada.TS2 += e.jumlahMahasiswaYangLulusPada.TS2;
      jumlahMahasiswaYangLulusPada.TS1 += e.jumlahMahasiswaYangLulusPada.TS1;
      jumlahMahasiswaYangLulusPada.TS += e.jumlahMahasiswaYangLulusPada.TS;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahMahasiswaYangLulusPada,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8D1 = async (req, res) => {
  try {
    const data = await Sub8D1.find().populate("user", {
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

    let jumlahLulusanDenganWaktuTunggu = {
      i: 0,
      ii: 0,
      iii: 0,
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

      jumlahLulusanDenganWaktuTunggu.i += e.jumlahLulusanDenganWaktuTunggu.i;
      jumlahLulusanDenganWaktuTunggu.ii += e.jumlahLulusanDenganWaktuTunggu.ii;
      jumlahLulusanDenganWaktuTunggu.iii +=
        e.jumlahLulusanDenganWaktuTunggu.iii;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahLulusanDenganWaktuTunggu,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8D2 = async (req, res) => {
  try {
    const data = await Sub8D2.find().populate("user", {
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

    let jumlahTingkatKesesuaian = {
      rendah: 0,
      sedang: 0,
      tinggi: 0,
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

      jumlahTingkatKesesuaian.rendah += e.jumlahTingkatKesesuaian.rendah;
      jumlahTingkatKesesuaian.sedang += e.jumlahTingkatKesesuaian.sedang;
      jumlahTingkatKesesuaian.tinggi += e.jumlahTingkatKesesuaian.tinggi;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahTingkatKesesuaian,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8E1 = async (req, res) => {
  try {
    const data = await Sub8E1.find().populate("user", {
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

    let jumlahBerdasarkanTingkat = {
      Lokal: 0,
      Nasional: 0,
      Internasional: 0,
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

      jumlahBerdasarkanTingkat.Lokal += e.jumlahBerdasarkanTingkat.lokal;
      jumlahBerdasarkanTingkat.Nasional += e.jumlahBerdasarkanTingkat.nasional;
      jumlahBerdasarkanTingkat.Internasional +=
        e.jumlahBerdasarkanTingkat.internasional;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahBerdasarkanTingkat,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8E2 = async (req, res) => {
  try {
    const data = await Sub8E2.find().populate("user", {
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

    let tingkatKepuasanPengguna = {
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

      tingkatKepuasanPengguna.sangatBaik +=
        e.tingkatKepuasanPengguna.sangatBaik;
      tingkatKepuasanPengguna.baik += e.tingkatKepuasanPengguna.baik;
      tingkatKepuasanPengguna.cukup += e.tingkatKepuasanPengguna.cukup;
      tingkatKepuasanPengguna.kurang += e.tingkatKepuasanPengguna.kurang;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      tingkatKepuasanPengguna,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8E2Ref = async (req, res) => {
  try {
    const data = await Sub8E2ref.find().populate("user", {
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
export const bagian8F11 = async (req, res) => {
  try {
    const data = await Sub8F11.find().populate("user", {
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

    let jumlahJudul = {
      TS2: 0,
      TS1: 0,
      TS: 0,
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

      jumlahJudul.TS2 += e.jumlahJudul.TS2;
      jumlahJudul.TS1 += e.jumlahJudul.TS1;
      jumlahJudul.TS += e.jumlahJudul.TS;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahJudul,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8F12 = async (req, res) => {
  try {
    const data = await Sub8F12.find().populate("user", {
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

    let jumlahJudul = {
      TS2: 0,
      TS1: 0,
      TS: 0,
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

      jumlahJudul.TS2 += e.jumlahJudul.TS2;
      jumlahJudul.TS1 += e.jumlahJudul.TS1;
      jumlahJudul.TS += e.jumlahJudul.TS;
    });

    let finalData = {
      statusVerifikasi,
      pengirim,
      jumlahJudul,
    };
    res.json(successWithData(finalData));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorWithMessage(error.message));
  }
};
export const bagian8F2 = async (req, res) => {
  try {
    const data = await Sub8F2.find().populate("user", {
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
export const bagian8F3 = async (req, res) => {
  try {
    const data = await Sub8F3.find().populate("user", {
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
export const bagian8F41 = async (req, res) => {
  try {
    const data = await Sub8F41.find().populate("user", {
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
export const bagian8F42 = async (req, res) => {
  try {
    const data = await Sub8F42.find().populate("user", {
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
export const bagian8F43 = async (req, res) => {
  try {
    const data = await Sub8F43.find().populate("user", {
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
export const bagian8F44 = async (req, res) => {
  try {
    const data = await Sub8F44.find().populate("user", {
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
