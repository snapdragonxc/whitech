/* eslint-disable */

const request = require('supertest');

const app = require('../app');

const products = require('../data/products.json');

const fs = require('fs')
const filename = './views/index.ejs';
let view = '';
fs.readFile(filename, 'utf8', function(err, data) {
  view = data;
});

// setup server
var server = request.agent(app);

describe('index', () => {
  describe('Get index page', ()  => {
    it('can get index page', (done) => {
        server.get('/')
            .end((err, res) => {
              expect(res.text).toEqual(view)
              done();
            });
    });

    it('can get any page', (done) => {
        server.get('/*')
            .end((err, res) => {
              expect(res.text).toEqual(view)
              done();
            });
    });

  })
});
