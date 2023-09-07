export const unprocessableEntityError = (message) => {

    if (!message) {
        message = "Dados da requisição inválidos";
    }

    return {
        type: "unprocessableEntity",
        message: `${message}`
    }
}