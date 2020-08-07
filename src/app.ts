import express, { Application } from "express";
const app: Application = express();
import morgan from "morgan";

import authRoutes from "./routes/auth";

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRoutes);

export default app;
