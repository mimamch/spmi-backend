import { errorWithMessage, successWithData } from "../../lib/response.js";
import { Sub5A, Sub5B, Sub5C } from "../models/sub5.js";

export const bag5A = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub5A.find({ user: req.user.id }).populate("user");
        } else {
          data = await Sub5A.findById(req.params.id).populate("user");
        }
      } else {
        if (!req.params.id) {
          data = await Sub5A.find().populate("user");
        } else {
          data = await Sub5A.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub5A({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub5A.findByIdAndUpdate(
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
      const data = await Sub5A.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag5B = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub5B.find({ user: req.user.id }).populate("user");
        } else {
          data = await Sub5B.findById(req.params.id).populate("user");
        }
      } else {
        if (!req.params.id) {
          data = await Sub5B.find().populate("user");
        } else {
          data = await Sub5B.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub5B({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub5B.findByIdAndUpdate(
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
      const data = await Sub5B.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag5C = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub5C.find({ user: req.user.id }).populate("user");
        } else {
          data = await Sub5C.findById(req.params.id).populate("user");
        }
      } else {
        if (!req.params.id) {
          data = await Sub5C.find().populate("user");
        } else {
          data = await Sub5C.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub5C({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub5C.findByIdAndUpdate(
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
      const data = await Sub5C.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};
