const request = require("supertest");
const connection = require('../../src/database');
const app = require("../../src/App");

// Se é possível cadastrar um sexo
// Se é possível listar os sexos

describe("Sexo Cliente", () => {
    afterAll(() => {
        connection.close();
    });

    it("É possível cadastrar um sexo para cliente", async () => {
        const response = await request(app).post("/sexo_cliente").send({
            sexo : "Masculino"
        });
        
        expect(response.ok).toBeTruthy();
        expect(response.body).toHaveProperty("id");
    });

    it("É possível listar os sexos", async () => {
        await request(app).post("/sexo_cliente").send({
            sexo : "Masculino"
        });

        const response = await request(app).get("/sexos_clientes").send();
        
        expect(response.ok).toBeTruthy();
        expect(response.body).toHaveProperty("id");
    });
});