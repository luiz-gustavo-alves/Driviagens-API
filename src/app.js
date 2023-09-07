import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));