import { Schema, model } from "mongoose";

const branchOfficeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    direction: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    mail: {
      type: String,
      unique: true,
    },
    openingHours: {
      type: String,
      unique: true,
    },
    closingHours: {
      type: String,
      unique: true,
    },
    products: [
      {
        products: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("BranchOffice", branchOfficeSchema);
