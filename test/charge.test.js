const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;

describe('POST /api/charge', () => {
  it('Should should successfully charge', done => {
    request.post('/api/charge')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end(resp => {
        expect(resp).to.not.be.undefined;
        expect(resp.body).to.haveOwnProperty('data');
        done();
      })
  })
})