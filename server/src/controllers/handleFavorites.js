
let myFavorites = []

function postFav(req, res) {
    const character = req.body
    myFavorites.push(character)
    res.status(200).json(myFavorites)
}
function deleteFav(req, res) {
    const { id } = req.params
    const filter = myFavorites.filter((pers) => pers.id !== Number(id))
    myFavorites = filter
    res.status(200).json(filter)
}
module.exports = { deleteFav, postFav }