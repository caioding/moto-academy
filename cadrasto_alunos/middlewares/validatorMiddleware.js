class ValidatorMiddleware {
    validateInput(request, response, next) {
        const { nome, idade } = request.body;
        if (typeof (nome) != 'string') {
            return response.status(500).json({ description: "Nome contem tipo errado" })
        }
        console.log(request.body);
    }
}
module.exports = new ValidatorMiddleware()