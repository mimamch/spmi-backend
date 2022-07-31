import { errorWithMessage, successWithData } from "../../lib/response.js";
import { Sub4 } from "../models/sub4.js";

export const sub4 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub4.find().populate("user");
      } else {
        data = await Sub4.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub4({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub4.findByIdAndUpdate(
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
      const data = await Sub4.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};
