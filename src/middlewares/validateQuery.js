import httpStatus from "http-status";

export const validateQuery = (schema) => {

    return (req, res, next) => {

        const { page } = req.query;
        if (page) {
            if (!Number(page) || Number(page) <= 0) {
                return res.status(httpStatus.BAD_REQUEST).send("Invalid page value");
            }
            req.query.page = Number(req.query.page); 
        }

        const validation = schema.validate(req.query, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map((detail) => detail.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
        }
        next();
    }
}