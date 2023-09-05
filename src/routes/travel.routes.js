import { Router } from "express";

import {
    insertTravel
} from "../controllers/travel.controller.js";

const travelRouter = Router();

travelRouter.post("/travels", insertTravel);

export default travelRouter;