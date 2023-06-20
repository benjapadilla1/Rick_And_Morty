const axios = require("axios")
function getCharById(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            const character = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                status: data.status,
                image: data.image,
            }
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(character))
        })
        .catch((err) => {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end(err.message)
        });
}

module.exports = getCharById