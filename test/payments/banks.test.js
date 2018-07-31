const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;

describe('GET /banks', () => {
  it('Should should show banks', done => {
    request.get('/api/banks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp).to.not.be.undefined;
        expect(resp.body).to.an('array')
        done();
      })
  })
  it('Should should show banks with bankname bankcode and internetbanking', done => {
    request.get('/api/banks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp).to.not.be.undefined;
        expect(resp.body[0]).to.have.keys('bankname', 'bankcode', 'internetbanking');
        done();
      })
  })
})