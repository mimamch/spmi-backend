import { errorWithMessage, successWithData } from "../../lib/response.js";
import { Sub6A, Sub6B } from "../models/sub6.js";

export const sub6A = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub6A.find({ user: req.user.id });
        } else {
          data = await Sub6A.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub6A.find().populate("user");
        } else {
          data = await Sub6A.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub6A({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub6A.findByIdAndUpdate(
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
      const data = await Sub6A.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const sub6B = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub6B.find({ user: req.user.id });
        } else {
          data = await Sub6B.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub6B.find().populate("user");
        } else {
          data = await Sub6B.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub6B({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub6B.findByIdAndUpdate(
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
      const data = await Sub6B.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};
