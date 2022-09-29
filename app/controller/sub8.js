import { errorWithMessage, successWithData } from "../../lib/response.js";
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
} from "../models/sub8.js";

export const bag8A = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8A.find({ user: req.user.id });
        } else {
          data = await Sub8A.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8A.find().populate("user");
        } else {
          data = await Sub8A.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8A({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8A.findByIdAndUpdate(
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
      const data = await Sub8A.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8B1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8B1.find({ user: req.user.id });
        } else {
          data = await Sub8B1.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8B1.find().populate("user");
        } else {
          data = await Sub8B1.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8B1({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8B1.findByIdAndUpdate(
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
      const data = await Sub8B1.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8B2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8B2.find({ user: req.user.id });
        } else {
          data = await Sub8B2.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8B2.find().populate("user");
        } else {
          data = await Sub8B2.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8B2({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8B2.findByIdAndUpdate(
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
      const data = await Sub8B2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8C = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8C.find({ user: req.user.id });
        } else {
          data = await Sub8C.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8C.find().populate("user");
        } else {
          data = await Sub8C.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8C({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8C.findByIdAndUpdate(
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
      const data = await Sub8C.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8D1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8D1.find({ user: req.user.id });
        } else {
          data = await Sub8D1.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8D1.find().populate("user");
        } else {
          data = await Sub8D1.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8D1({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8D1.findByIdAndUpdate(
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
      const data = await Sub8D1.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8D2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8D2.find({ user: req.user.id });
        } else {
          data = await Sub8D2.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8D2.find().populate("user");
        } else {
          data = await Sub8D2.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8D2({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8D2.findByIdAndUpdate(
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
      const data = await Sub8D2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8E1 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8E1.find({ user: req.user.id });
        } else {
          data = await Sub8E1.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8E1.find().populate("user");
        } else {
          data = await Sub8E1.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8E1({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8E1.findByIdAndUpdate(
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
      const data = await Sub8E1.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8E2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8E2.find({ user: req.user.id });
        } else {
          data = await Sub8E2.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8E2.find().populate("user");
        } else {
          data = await Sub8E2.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8E2({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8E2.findByIdAndUpdate(
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
      const data = await Sub8E2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8E2Ref = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8E2ref.find({ user: req.user.id });
        } else {
          data = await Sub8E2ref.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8E2ref.find().populate("user");
        } else {
          data = await Sub8E2ref.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8E2ref({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8E2ref.findByIdAndUpdate(
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
      const data = await Sub8E2ref.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F11 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F11.find({ user: req.user.id });
        } else {
          data = await Sub8F11.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F11.find().populate("user");
        } else {
          data = await Sub8F11.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F11({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F11.findByIdAndUpdate(
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
      const data = await Sub8F11.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F12 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F12.find({ user: req.user.id });
        } else {
          data = await Sub8F12.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F12.find().populate("user");
        } else {
          data = await Sub8F12.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F12({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F12.findByIdAndUpdate(
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
      const data = await Sub8F12.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F2 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F2.find({ user: req.user.id });
        } else {
          data = await Sub8F2.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F2.find().populate("user");
        } else {
          data = await Sub8F2.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F2({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F2.findByIdAndUpdate(
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
      const data = await Sub8F2.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F3 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F3.find({ user: req.user.id });
        } else {
          data = await Sub8F3.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F3.find().populate("user");
        } else {
          data = await Sub8F3.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F3({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F3.findByIdAndUpdate(
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
      const data = await Sub8F3.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F41 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F41.find({ user: req.user.id });
        } else {
          data = await Sub8F41.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F41.find().populate("user");
        } else {
          data = await Sub8F41.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F41({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F41.findByIdAndUpdate(
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
      const data = await Sub8F41.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F42 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F42.find({ user: req.user.id });
        } else {
          data = await Sub8F42.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F42.find().populate("user");
        } else {
          data = await Sub8F42.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F42({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F42.findByIdAndUpdate(
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
      const data = await Sub8F42.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F43 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F43.find({ user: req.user.id });
        } else {
          data = await Sub8F43.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F43.find().populate("user");
        } else {
          data = await Sub8F43.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F43({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F43.findByIdAndUpdate(
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
      const data = await Sub8F43.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};

export const bag8F44 = {
  show: async (req, res) => {
    try {
      let data = [];
      if (req.user.role == "prodi") {
        if (!req.params.id) {
          data = await Sub8F44.find({ user: req.user.id });
        } else {
          data = await Sub8F44.findById(req.params.id);
        }
      } else {
        if (!req.params.id) {
          data = await Sub8F44.find().populate("user");
        } else {
          data = await Sub8F44.findById(req.params.id);
        }
      }
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  create: async (req, res) => {
    try {
      const save = new Sub8F44({ ...req.body, user: req.user.id });
      await save.save();
      res.json(successWithData(save));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
  update: async (req, res) => {
    try {
      const data = await Sub8F44.findByIdAndUpdate(
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
      const data = await Sub8F44.findByIdAndDelete(req.params.id);
      if (!data)
        return res.status(404).json(errorWithMessage("Data Tidak Ditemukan!"));
      res.json(successWithData(data));
    } catch (error) {
      res.status(500).json(errorWithMessage(error.message));
    }
  },
};
