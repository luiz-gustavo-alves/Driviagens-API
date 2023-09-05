import { Router } from "express";

import {
    insertFlight,
    getAllFlights
} from "../controllers/flight.controller.js";

const flightRouter = Router();

flightRouter.get("/flights", getAllFlights);
flightRouter.post("/flights", insertFlight);

export default flightRouter;