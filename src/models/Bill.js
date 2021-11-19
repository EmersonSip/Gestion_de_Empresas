import { Schema, model } from "mongoose";

const billSchema = new Schema(
  {
    Date: {
      type: String,
      required: true,
    },
  },
  {
    tipestamps: true,
    versionKey: false,
  }
);

export default model("Bill", billSchema);
