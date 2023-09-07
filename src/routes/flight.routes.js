import { Router } from "express";

import {
    insertFlight,
    getFlightsByQuery
} from "../controllers/flight.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { validateQuery } from "../middlewares/validateQuery.js";
import { flightSchema} from "../schemas/flight.schema.js";
import { querySchema } from "../schemas/query.schema.js";

const flightRouter = Router();

flightRouter.get("/flights", validateQuery(querySchema), getFlightsByQuery);
flightRouter.post("/flights", validateSchema(flightSchema), insertFlight);
 
export default flightRouter;