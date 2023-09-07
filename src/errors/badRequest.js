export const badRequestError = (message) => {

    if (!message) {
        message = "Requisição mal sucedida";
    }

    return {
        type: "badRequest",
        message: `${message}`
    }
}