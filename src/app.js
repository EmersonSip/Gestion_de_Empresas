import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import branchOfficesRoutes from "./routes/branchOffices.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import billRoutes from "./routes/bill.routes";
import productRoutes from "./routes/product.routes";
import billingDetails from "./routes/billingDetail.routes";

const app = express();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/branchOffices", branchOfficesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bills", billRoutes);
app.use("/api/products", productRoutes);
app.use("/api/billingDetails", billingDetails);

export default app;
