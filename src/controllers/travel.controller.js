

export const insertTravel = async (req, res) => {

    try {
        res.send(req.body);

    } catch (err) {
        res.status(500).send(err.message);
    }
}