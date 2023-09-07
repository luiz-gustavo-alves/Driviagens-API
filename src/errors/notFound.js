export const notFoundError = (message) => {

    if (!message) {
        message = "Item não encontrado";
    }

    return {
        type: "notFound",
        message: `${message}`
    }
}