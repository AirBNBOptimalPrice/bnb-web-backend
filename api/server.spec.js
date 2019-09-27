const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('return a 200 OK status code', () => {
            // make a GET request to the / endpoint on the server
            return request(server)
            .get('/')
            .then( res => {
                // assertthat we get an http status code of 200
                expect(res.status).toBe(200);
            })
        });

        it("should return {'api is running'} ", async () => {
            const res = await request(server).get('/');

            expect(res.text).toBe('api is running');

        });
    });
});