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
} from "../models/sub3.js";
import { errorWithMessage, successWithData } from "../../lib/response.js";

export const bagA1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagA1.find({ user: req.user.id });
        } else {
          data = await Sub3BagA1.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagA1.find().populate("user");
        } else {
          data = await Sub3BagA1.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagA1.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagA2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagA2.find({ user: req.user.id });
        } else {
          data = await Sub3BagA2.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagA2.find().populate("user");
        } else {
          data = await Sub3BagA2.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagA2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagA3 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagA3.find({ user: req.user.id });
        } else {
          data = await Sub3BagA3.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagA3.find().populate("user");
        } else {
          data = await Sub3BagA3.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagA3.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagA4 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagA4.find({ user: req.user.id });
        } else {
          data = await Sub3BagA4.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagA4.find().populate("user");
        } else {
          data = await Sub3BagA4.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagA4.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagA5 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagA5.find({ user: req.user.id });
        } else {
          data = await Sub3BagA5.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagA5.find().populate("user");
        } else {
          data = await Sub3BagA5.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagA5.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB1.find({ user: req.user.id });
        } else {
          data = await Sub3BagB1.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB1.find().populate("user");
        } else {
          data = await Sub3BagB1.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagB1.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB2.find({ user: req.user.id });
        } else {
          data = await Sub3BagB2.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB2.find().populate("user");
        } else {
          data = await Sub3BagB2.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
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
      res.status(500).json(errorWithMessage(error.message));
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
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  delete: async (req, res) => {
    try {
      const data = await Sub3BagB2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB3 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB3.find({ user: req.user.id });
        } else {
          data = await Sub3BagB3.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB3.find().populate("user");
        } else {
          data = await Sub3BagB3.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB3({
        ...req.body,
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
      const data = await Sub3BagB3.findByIdAndUpdate(
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
      const data = await Sub3BagB3.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB41 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB41.find({ user: req.user.id });
        } else {
          data = await Sub3BagB41.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB41.find().populate("user");
        } else {
          data = await Sub3BagB41.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB41({
        ...req.body,
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
      const data = await Sub3BagB41.findByIdAndUpdate(
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
      const data = await Sub3BagB41.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB42 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB42.find({ user: req.user.id });
        } else {
          data = await Sub3BagB42.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB42.find().populate("user");
        } else {
          data = await Sub3BagB42.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB42({
        ...req.body,
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
      const data = await Sub3BagB42.findByIdAndUpdate(
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
      const data = await Sub3BagB42.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB5 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB5.find({ user: req.user.id });
        } else {
          data = await Sub3BagB5.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB5.find().populate("user");
        } else {
          data = await Sub3BagB5.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB5({
        ...req.body,
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
      const data = await Sub3BagB5.findByIdAndUpdate(
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
      const data = await Sub3BagB5.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB6 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB6.find({ user: req.user.id });
        } else {
          data = await Sub3BagB6.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB6.find().populate("user");
        } else {
          data = await Sub3BagB6.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB6({
        ...req.body,
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
      const data = await Sub3BagB6.findByIdAndUpdate(
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
      const data = await Sub3BagB6.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB71 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB71.find({ user: req.user.id });
        } else {
          data = await Sub3BagB71.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB71.find().populate("user");
        } else {
          data = await Sub3BagB71.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB71({
        ...req.body,
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
      const data = await Sub3BagB71.findByIdAndUpdate(
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
      const data = await Sub3BagB71.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB72 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB72.find({ user: req.user.id });
        } else {
          data = await Sub3BagB72.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB72.find().populate("user");
        } else {
          data = await Sub3BagB72.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB72({
        ...req.body,
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
      const data = await Sub3BagB72.findByIdAndUpdate(
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
      const data = await Sub3BagB72.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB73 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB73.find({ user: req.user.id });
        } else {
          data = await Sub3BagB73.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB73.find().populate("user");
        } else {
          data = await Sub3BagB73.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB73({
        ...req.body,
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
      const data = await Sub3BagB73.findByIdAndUpdate(
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
      const data = await Sub3BagB73.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bagB74 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub3BagB74.find({ user: req.user.id });
        } else {
          data = await Sub3BagB74.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub3BagB74.find().populate("user");
        } else {
          data = await Sub3BagB74.findById(req.params.id);
        }
      }

      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub3BagB74({
        ...req.body,
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
      const data = await Sub3BagB74.findByIdAndUpdate(
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
      const data = await Sub3BagB74.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};
