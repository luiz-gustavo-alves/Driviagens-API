

export const insertFlight = async (req, res) => {

    try {
        res.send(req.body);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const getAllFlights = async (req, res) => {

    try {
        res.send(req.body);

    } catch (err) {
        res.status(500).send(err.message);
    }
}