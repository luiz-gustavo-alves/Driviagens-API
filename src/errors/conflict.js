export const conflictError = (message) => {

    if (!message) {
        message = "Item já existe";
    }

    return {
        type: "conflict",
        message: `${message}`
    }
}