import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Sub4Schema = new Schema(
  {
    jenisPenggunaan: String,
    unitPengelolaanPs: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    programStudi: {
      TS2: { type: Number, default: 0 },
      TS1: { type: Number, default: 0 },
      TS: { type: Number, default: 0 },
    },
    user: { type: mongoose.ObjectId, ref: "User" },
    isAccepted: String,
    komentar: String,
    file: String,
  },
  {
    timestamps: true,
    virtuals: {
      rataRataUnitPengelolaanPs: {
        get() {
          return (
            (this.unitPengelolaanPs.TS2 +
              this.unitPengelolaanPs.TS1 +
              this.unitPengelolaanPs.TS) /
            3
          );
        },
      },
      rataRataProgramStudi: {
        get() {
          return (
            (this.programStudi.TS2 +
              this.programStudi.TS1 +
              this.programStudi.TS) /
            3
          );
        },
      },
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Sub4 = model("Sub4", Sub4Schema);
