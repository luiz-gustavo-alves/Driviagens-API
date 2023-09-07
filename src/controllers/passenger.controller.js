import passengerService from "../services/passenger.service.js";
import httpStatus from "http-status";

export const insertPassenger = async (req, res) => {

    await passengerService.insertPassenger(req.body);
    res.sendStatus(httpStatus.CREATED);
}

export const getPassengersTravelsByQuery = async (req, res) => {

    const query = { ...req.query };

    const passengers = await passengerService.getPassengersTravelsByQuery(query);
    res.send(passengers);
}