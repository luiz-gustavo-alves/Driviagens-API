import { Router } from "express";

import {
    insertCity
} from "../controllers/city.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { citySchema } from "../schemas/city.schema.js";

const cityRouter = Router();

cityRouter.post("/cities", validateSchema(citySchema), insertCity);

export default cityRouter;