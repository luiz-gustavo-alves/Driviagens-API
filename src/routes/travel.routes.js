import { Router } from "express";

import {
    insertTravel
} from "../controllers/travel.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travel.schema.js";

const travelRouter = Router();

travelRouter.post("/travels", validateSchema(travelSchema), insertTravel);

export default travelRouter;