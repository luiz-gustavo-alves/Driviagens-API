import { Router } from "express";

import {
    insertPassenger,
    getPassengersTravelsByQuery
} from "../controllers/passenger.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passenger.schema.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels", getPassengersTravelsByQuery);
passengerRouter.post("/passengers", validateSchema(passengerSchema), insertPassenger);

export default passengerRouter;