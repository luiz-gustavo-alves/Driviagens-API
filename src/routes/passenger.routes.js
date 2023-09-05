import { Router } from "express";

import {
    insertPassenger,
    getAllPassengersTravels
} from "../controllers/passenger.controller.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels", getAllPassengersTravels);
passengerRouter.post("/passengers", insertPassenger);

export default passengerRouter;