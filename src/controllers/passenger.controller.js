

export const insertPassenger = async (req, res) => {
    
    try {
        res.send(req.body);

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