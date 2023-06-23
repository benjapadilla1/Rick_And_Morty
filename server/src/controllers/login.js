const users = require("../utils/users")
function login(req, res) {
    const { email, password } = req.query
    const user = users.find(
        (usuario) => usuario.email === email && usuario.password === password)
    const access = user ? true : false
    res.status(200).json({ access })
}

module.exports = login  