import { Router } from "express";

import {
    insertFlight,
    getAllFlights
} from "../controllers/flight.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema } from "../schemas/flight.schema.js";

const flightRouter = Router();

flightRouter.get("/flights", getAllFlights);
flightRouter.post("/flights", validateSchema(flightSchema), insertFlight);

export default flightRouter;