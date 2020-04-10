const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
       await connection.migrate.rollback();
       await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    
    //Test to create a new ONG.
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "NAAC",
                email: "contact@naac.com",
                whatsapp: "6900000000",
                city: "Porto Velho",
                uf: "RO"
            });
        console.log(response.body);
        });
    
    //Test to create a new incident.
    it('should be able to create a new incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .send({
                title: "Help needy children.",
                description: "Help needy children to have a better future",
                value: "150"
            })
            .set({
                Authorization: 'c1ac2972'
            });
        console.log(response.body);
    });
});