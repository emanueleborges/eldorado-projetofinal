const supertest = require('supertest');
const app = require('../index');

describe('Test Api', () => {

    it('GET /api/category 200', async ()=> {
        const response = await supertest(app)
        .get('/api/category');
        expect(response.statusCode).toBe(200);
    });

    it('DELETE /api/category', async ()=> {
        const body = {
            Name: ""
        };
        const response = await supertest(app)
        .delete('/api/category/11')
        expect(response.statusCode).toBe(200);
    });

    it('GET /api/device', async ()=> {
        const response = await supertest(app).
        get('/api/device');
        expect(response.statusCode).toBe(200);
    });
    
    it('DELETE /api/device', async ()=> {
        const body = {
            Name: ""
        };
        const response = await supertest(app)
        .delete('/api/device/11')
        expect(response.statusCode).toBe(200);
    });
    
    
});