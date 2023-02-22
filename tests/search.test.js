const { removeAllListeners } = require('nodemon');
const request = require('supertest');

const { createApp } = require('../app');
const { appDataSource } = require('../src/models/data-source');

describe('Search Witings By Title', () => {
    let app;

    beforeAll(async () => {
        app = createApp();
        await appDataSource.initialize();
    });

    afterAll(async () => {
        await appDataSource.destroy();
    });

    test('Searching for a specific title', async () => {
        await appDataSource.query(
            `
            INSERT INTO writings 
            (title, content, header_image, price, category_id, user_id)
            VALUES
            ('ohohoh2','ohohoh','ohohohoh',1000,1,1)`
        );
        await request(app)
            .get('/writings/search?searchWord=oh')
            .expect(200)
            .expect({ result: [{ title: 'ohohoh2' }] });
    });
    test('Nothing to Find', async () => {
        await request(app).get('/writings/search?searchWord=').expect(204).expect({});
    });
});
