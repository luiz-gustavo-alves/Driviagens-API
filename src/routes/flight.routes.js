import { Router } from "express";

import {
    insertFlight,
    getFlightsByQuery
} from "../controllers/flight.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { validateQuery } from "../middlewares/validateQuery.js";
import { 
    flightSchema,
    flightQuerySchema
} from "../schemas/flight.schema.js";

const flightRouter = Router();

flightRouter.get("/flights", validateQuery(flightQuerySchema), getFlightsByQuery);
flightRouter.post("/flights", validateSchema(flightSchema), insertFlight);

export default flightRouter;