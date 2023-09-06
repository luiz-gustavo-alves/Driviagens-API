import passengerService from "../services/passenger.service.js";

export const insertPassenger = async (req, res) => {
    
    try {
        await passengerService.insertPassenger(req.body);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const getPassengersTravelsByQuery = async (req, res) => {

    const query = { ...req.query };

    try {
        const passengers = await passengerService.getPassengersTravelsByQuery(query);
        res.send(passengers);

    } catch (err) {
        res.status(500).send(err.message);
    }
}