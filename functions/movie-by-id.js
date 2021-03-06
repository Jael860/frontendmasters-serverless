const movies = require("../data/movies.json");
exports.handler = async (event) => {
    const { id } = event.queryStringParameters;
    const movie = movies.find((m) => m.id == id);
    if (!movie) {
        return {
            statusCode: 404,
            body: "Not found"
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(movie)
    }
}