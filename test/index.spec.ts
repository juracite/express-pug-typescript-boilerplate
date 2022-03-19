import { app } from '../src/server';
import { agent as request } from 'supertest';
import {expect} from 'chai';

describe("Routing tests", () => {
    it('should GET /', async function () {
        const res = await request(app)
            .get('/');
        expect(res.status).to.equal(200);
    });
});
