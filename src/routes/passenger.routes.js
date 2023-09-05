import { Router } from "express";

import {
    insertPassenger,
    getAllPassengersTravels
} from "../controllers/passenger.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passenger.schema.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels", getAllPassengersTravels);
passengerRouter.post("/passengers", validateSchema(passengerSchema), insertPassenger);

export default passengerRouter;