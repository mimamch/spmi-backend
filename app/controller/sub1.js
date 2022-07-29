import { Sub1Bag1 } from "../models/sub1.js";
import { errorWithMessage, successWithData } from "../../lib/response.js";

export const bag1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub1Bag1.find();
      } else {
        data = await Sub1Bag1.findById(req.params.id);
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub1Bag1({
        lembagaMitra: req.body.lembagaMitra,
        tingkat: req.body.tingkat,
        judulKegiatan: req.body.judulKegiatan,
        manfaat: req.body.manfaat,
        waktuDanDurasi: req.body.waktuDanDurasi,
        buktiKerjasama: req.body.buktiKerjasama,
        tahunBerakhir: req.body.tahunBerakhir,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
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
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub1Bag1.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};
