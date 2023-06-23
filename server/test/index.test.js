const app = require("../src/app")
const session = require("supertest")
const agent = session(app)

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con un status: 200", async () => {
            await agent.get("/rickandmorty/character/1").expect(200)
        })
        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image`, async () => {
            const { body } = await agent.get("/rickandmorty/character/1")
            const atributes = ["id", "name", "species", "gender", "status", "origin", "image"]
            const keys = Object.keys(body)
            atributes.forEach((atribute) => {
                expect(keys).toContain(atribute)
            });
        })
        it("Si hay un error responde con status: 500", async () => {
            await agent.get("/rickandmorty/character/827").expect(500)
            await agent.get("/rickandmorty/character/0").expect(500)
        })
    })
    describe("GET/rickandmorty/login", () => {
        const { email, password } = require("../src/utils/users")[0]
        it(`Responde con access "true" `, async () => {
            const { body } = await agent.get(`/rickandmorty/login?email=${email}&password=${password}`)
            expect(body.access).toEqual(true)
        })
        it(`Responde con access "false" `, async () => {
            const { body } = await agent.get(`/rickandmorty/login?email=${email}&password=123`)
            expect(body.access).toEqual(false)
        })
    })

    describe("POST/rickandmorty/fav", () => {
        const char1 = { id: 1, name: "Gama" }
        const char2 = { id: 2, name: "Benja" }
        it("Devuelve un array con el personaje", async () => {
            const { body } = (await agent.post("/rickandmorty/fav").send(char1))
            expect(body).toContainEqual(char1)
        })
        it("Al enviar mas de un elemento devuelve todos los elementos", async () => {
            const { body } = (await agent.post("/rickandmorty/fav").send(char2))
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        })
    })
    describe("DELETE/rickandmorty/fav:id", () => {
        const char1 = { id: 1, name: "Gama" }
        const char2 = { id: 2, name: "Benja" }
        it("Si no se envia un id correcto se devuelve el mismo array", async () => {
            const { body } = await agent.delete("/rickandmorty/fav/0")
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        })
        it("Elimina correctamente al personaje que contenga el ID", async () => {
            const { body } = await agent.delete("/rickandmorty/fav/1")
            expect(body).not.toContainEqual(char1)
        }
        )
    })
})
