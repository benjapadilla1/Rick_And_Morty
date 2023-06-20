const http = require("http")
const getChar = require("./controllers/getCharById")
http.createServer((req, res) => {
    const { url } = req
    res.setHeader('Access-Control-Allow-Origin', '*'); // no tocar
    if (url.includes("/rickandmorty/character")) {
        let id = url.split("/").pop()
        getChar(res, id)
    }
}).listen(5174)