import Joi from "joi";

export const travelSchema = Joi.object({
    passengerId: Joi.number().positive().required(),
    flightId: Joi.number().positive().required()
});