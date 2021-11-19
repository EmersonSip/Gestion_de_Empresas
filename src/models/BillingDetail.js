import { Schema, model } from "mongoose";

const billingDetailSchema = new Schema(
  {
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
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
    bills: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bill",
      },
    ],
  },
  {
    tipestamps: true,
    versionKey: false,
  }
);

export default model("BillingDetail", billingDetailSchema);
