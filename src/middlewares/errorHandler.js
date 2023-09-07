import httpStatus from "http-status";

export const errorHandler = (err, req, res, next) => {

    switch (err.type) {

        case "badRequest":
            return res.status(httpStatus.BAD_REQUEST).send(err.message);

        case "conflict":
            return res.status(httpStatus.CONFLICT).send(err.message);

        case "notFound":
            return res.status(httpStatus.NOT_FOUND).send(err.message);

        case "tooManyResults":
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);

        case "unprocessableEntity":
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);

        default:
            const defaultMessage = "Desculpe. Algo deu errado. Tente novamente mais tarde.";
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(defaultMessage);
    }
}