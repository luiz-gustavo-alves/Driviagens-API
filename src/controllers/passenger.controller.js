import passengerService from "../services/passenger.service.js";

export const insertPassenger = async (req, res) => {

    await passengerService.insertPassenger(req.body);
    res.sendStatus(201);
}

export const getPassengersTravelsByQuery = async (req, res) => {

    const query = { ...req.query };

    const passengers = await passengerService.getPassengersTravelsByQuery(query);
    res.send(passengers);
}