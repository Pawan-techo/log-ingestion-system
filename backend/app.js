import express from "express";
import cors from "cors";
import logRoutes from "./src/routes/log.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/logs", logRoutes);

export default app;
