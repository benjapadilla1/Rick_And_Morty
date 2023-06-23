const server = require("./app")
const PORT = 5174

server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT)
})

