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

describe('GET /banks', () => {
  it('Should should show banks', done => {
    request.get('/api/payments/banks')
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
    request.get('/api/payments/banks')
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

describe('POST /api/payments/charge', () => {
  it('Should should successfully charge', done => {
    request.post('/api/payments/charge')
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
    request.post('/api/payments/charge')
      .send(payload1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) done(err)
        expect(resp.body).to.not.be.undefined;
        expect(resp.body.data).to.have.any.keys('id', 'flwRef', 'raveRef');
        transaction_reference = resp.body.data.flwRef;
        done();
      })
  })
})


describe('POST /api/payments/verify', () => {
  it('Should should successfully verify transaction', done => {
    request.post('/api/payments/validate')
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