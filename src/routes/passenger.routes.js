import { Router } from "express";

import {
    insertPassenger,
    getPassengersTravelsByQuery
} from "../controllers/passenger.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { validateQuery } from "../middlewares/validateQuery.js";
import { passengerSchema } from "../schemas/passenger.schema.js";
import { querySchema } from "../schemas/query.schema.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels", validateQuery(querySchema), getPassengersTravelsByQuery);
passengerRouter.post("/passengers", validateSchema(passengerSchema), insertPassenger);
 
export default passengerRouter;