/* eslint-disable */

const request = require('supertest');

const app = require('../app');

const products = require('../data/products.json');

// setup server
var server = request.agent(app);

describe('Products api tests', () => {
  describe('Get all products ', ()  => {
    it('can get all products', (done) => {
        server.get('/api')
            .end((err, res) => {

    //          console.log('dd', res.body)
              expect(res.body).toEqual(products)
              done();
            });
    });
  })
});
