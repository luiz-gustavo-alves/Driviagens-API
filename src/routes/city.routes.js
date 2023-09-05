import { Router } from "express";

import {
    insertCity
} from "../controllers/city.controller.js";

const cityRouter = Router();

cityRouter.post("/cities", insertCity);

export default cityRouter;