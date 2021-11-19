import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      unique: true,
    },
    miniumStock: {
      type: Number,
      unique: true,
    },
    price: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
