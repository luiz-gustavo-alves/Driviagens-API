import passengerService from "../services/passenger.service.js";

export const insertPassenger = async (req, res) => {
    
    try {
        await passengerService.insertPassenger(req.body);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const getAllPassengersTravels = async (req, res) => {
    
    try {
        res.send(req.body);

    } catch (err) {
        res.status(500).send(err.message);
    }
}