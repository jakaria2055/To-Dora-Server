import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/routes/api.js";

const app = express();

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


// ROUTES ENTRY
app.get("/", (req, res) => res.send("Server is working fine..."));
app.use("/api/v1", router);

export default app;
