const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;
const { payload1 } = require('./utils')

describe('POST /api/charge', () => {
  it('Should should successfully charge', done => {
    request.post('/api/charge')
      .send(payload1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp.body).to.not.be.undefined;
        done();
      })
  })
  it('Should should return a success response', done => {
    request.post('/api/charge')
      .send(payload1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp.body).to.not.be.undefined;
        expect(resp.body.data).to.have.any.keys('id', 'flwRef', 'raveRef');
        done();
      })
  })
})