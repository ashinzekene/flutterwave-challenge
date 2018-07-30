const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;
const {
  payload1,
  PBFPubKey,
  otp1
} = require('./utils')

let transaction_reference;

describe('POST /api/verify', () => {
  it('Should should successfully charge', done => {
    request.post('/api/charge')
      .send(payload1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp.body).to.not.be.undefined;
        transaction_reference = resp.body.data.flwRef;
        done();
      })
  })
  it('Should should successfully verify transaction', done => {
    request.post('/api/validate')
      .send({ otp: otp1, PBFPubKey ,transaction_reference })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp.body).to.not.be.undefined;
        expect(resp.body.data).to.have.any.keys('data');
        done();
      })
  })

})