import {
  Sub3BagA1,
  Sub3BagA2,
  Sub3BagA3,
  Sub3BagA4,
  Sub3BagA5,
  Sub3BagB1,
  Sub3BagB2,
} from "../models/sub3.js";
import { errorWithMessage, successWithData } from "../../lib/response.js";

export const bagA1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagA1.find().populate("user");
      } else {
        data = await Sub3BagA1.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagA1({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagA1.findByIdAndUpdate(
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
      const data = await Sub3BagA1.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bagA2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagA2.find().populate("user");
      } else {
        data = await Sub3BagA2.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagA2({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagA2.findByIdAndUpdate(
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
      const data = await Sub3BagA2.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bagA3 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagA3.find().populate("user");
      } else {
        data = await Sub3BagA3.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagA3({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagA3.findByIdAndUpdate(
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
      const data = await Sub3BagA3.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bagA4 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagA4.find().populate("user");
      } else {
        data = await Sub3BagA4.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagA4({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagA4.findByIdAndUpdate(
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
      const data = await Sub3BagA4.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bagA5 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagA5.find().populate("user");
      } else {
        data = await Sub3BagA5.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagA5({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagA5.findByIdAndUpdate(
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
      const data = await Sub3BagA5.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bagB1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagB1.find().populate("user");
      } else {
        data = await Sub3BagB1.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB1({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagB1.findByIdAndUpdate(
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
      const data = await Sub3BagB1.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bagB2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub3BagB2.find().populate("user");
      } else {
        data = await Sub3BagB2.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB2({
        ...req.body,
        user: req.user.id,
      });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub3BagB2.findByIdAndUpdate(
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
      const data = await Sub3BagB2.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};
