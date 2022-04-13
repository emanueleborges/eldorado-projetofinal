const supertest = require('supertest');
const app = require('../index');

describe('Test Api', () => {

    it('GET /category', async ()=> {
        const response = await supertest(app)
        .get('/api/category');
        expect(response.statusCode).toBe(200);
    });

    it('DELETE /category', async ()=> {
        const body = {
            Name: ""
        };
        const response = await supertest(app)
        .delete('/api/category/11')
        expect(response.statusCode).toBe(200);
    });

    it('GET /device', async ()=> {
        const response = await supertest(app).
        get('/api/device');
        expect(response.statusCode).toBe(200);
    });
    
    it('DELETE /device', async ()=> {
        const body = {
            Name: ""
        };
        const response = await supertest(app)
        .delete('/api/device/11')
        expect(response.statusCode).toBe(200);
    });
    
    
});