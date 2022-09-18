import { Sub1Bag1, Sub1Bag2, Sub1Bag3 } from "../models/sub1.js";
import { errorWithMessage, successWithData } from "../../lib/response.js";
import { publicPath } from "../../lib/path.js";
export const bag1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub1Bag1.find({ user: req.user.id }).populate("user");
        } else {
          data = await Sub1Bag1.findById(req.params.id).populate("user");
        }
      } else {
        if (!req.params.id) {
          data = await Sub1Bag1.find().populate("user");
        } else {
          data = await Sub1Bag1.findById(req.params.id).populate("user");
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    // console.log(req.body);
    // return;
    try {
      // console.log(req.user);
      const save = new Sub1Bag1({
        ...req.body,
        lembagaMitra: req.body.lembagaMitra,
        tingkat: req.body.tingkat,
        judulKegiatan: req.body.judulKegiatan,
        manfaat: req.body.manfaat,
        waktuDanDurasi: req.body.waktuDanDurasi,
        buktiKerjasama: req.body.buktiKerjasama,
        tahunBerakhir: req.body.tahunBerakhir,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub1Bag1.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub1Bag1.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub1Bag2.find({ user: req.user.id }).populate("user");
        } else {
          data = await Sub1Bag2.findById(req.params.id).populate("user");
        }
      } else {
        if (!req.params.id) {
          data = await Sub1Bag2.find().populate("user");
        } else {
          data = await Sub1Bag2.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub1Bag2({
        ...req.body,
        lembagaMitra: req.body.lembagaMitra,
        tingkat: req.body.tingkat,
        judulKegiatan: req.body.judulKegiatan,
        manfaat: req.body.manfaat,
        waktuDanDurasi: req.body.waktuDanDurasi,
        buktiKerjasama: req.body.buktiKerjasama,
        tahunBerakhir: req.body.tahunBerakhir,
        user: req.user._id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub1Bag2.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub1Bag2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag3 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub1Bag3.find({ user: req.user.id }).populate("user");
        } else {
          data = await Sub1Bag3.findById(req.params.id).populate("user");
        }
      } else {
        if (!req.params.id) {
          data = await Sub1Bag3.find().populate("user");
        } else {
          data = await Sub1Bag3.findById(req.params.id).populate("user");
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      console.log(req.body);
      const save = new Sub1Bag3({
        ...req.body,
        lembagaMitra: req.body.lembagaMitra,
        tingkat: req.body.tingkat,
        judulKegiatan: req.body.judulKegiatan,
        manfaat: req.body.manfaat,
        waktuDanDurasi: req.body.waktuDanDurasi,
        buktiKerjasama: req.body.buktiKerjasama,
        tahunBerakhir: req.body.tahunBerakhir,
        user: req.user._id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub1Bag3.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub1Bag3.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};
