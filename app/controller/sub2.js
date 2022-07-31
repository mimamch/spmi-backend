import { Sub2Bag1, Sub2Bag2 } from "../models/sub2.js";
import { errorWithMessage, successWithData } from "../../lib/response.js";

export const bag1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub2Bag1.find().populate("user");
      } else {
        data = await Sub2Bag1.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub2Bag1({
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
      const data = await Sub2Bag1.findByIdAndUpdate(
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
      const data = await Sub2Bag1.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};

export const bag2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (!req.params.id) {
        data = await Sub2Bag2.find().populate("user");
      } else {
        data = await Sub2Bag2.findById(req.params.id).populate("user");
      }
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      console.log(req.body);
      const save = new Sub2Bag2({
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
      const data = await Sub2Bag2.findByIdAndUpdate(
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
      const data = await Sub2Bag2.findByIdAndDelete(req.params.id);
      if (!data) return res.json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.json(errorWithMessage(error.message));
    }
  },
};
