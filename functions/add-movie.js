const {query} = require("./util/hasura");

exports.handler = async (event) => {
    console.log("event:", event);
    const { id, title, tagline, poster } = JSON.parse(event.body);

    const result = await query({
        query: `
            mutation MyMutation($poster: String!, $id: String!, $tagline: String!, $title: String!) {
                insert_movies_one(object: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
                id
                poster
                tagline
                title
                }
            }
        `,
        variables: {id, title, tagline, poster}
    })
    console.log("Result:", result);

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
}