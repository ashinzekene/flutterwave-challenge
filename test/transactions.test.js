const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;
const {
  payload1,
  PBFPubKey,
  otp1,
  qr_req
} = require('./utils')

let transaction_reference;

describe('GET /banks', () => {
  it('Should show banks', done => {
    request.get('/api/transactions/banks')
      .set('Accept', 'application/json')
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp).to.not.be.undefined;
        expect(resp.body).to.an('array')
        done();
      })
  })
  it('Should show banks with bankname bankcode and internetbanking', done => {
    request.get('/api/transactions/banks')
      .set('Accept', 'application/json')
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp).to.not.be.undefined;
        expect(resp.body[0]).to.have.keys('bankname', 'bankcode', 'internetbanking');
        done();
      })
  })
})

describe('POST /api/transactions/charge', () => {
  it('Should successfully charge', done => {
    request.post('/api/transactions/charge')
      .send(payload1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp.body).to.not.be.undefined;
        done();
      })
  })
  it('Should return a success response', done => {
    request.post('/api/transactions/charge')
      .send(payload1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp.body).to.not.be.undefined;
        if (resp.body.data.tx) {
          expect(resp.body.data.tx).to.have.include.all.keys('id', 'flwRef', 'raveRef');
          transaction_reference = resp.body.data.tx.flwRef;
        } else {
          expect(resp.body.data).to.have.include.all.keys('id', 'flwRef', 'raveRef');
          transaction_reference = resp.body.data.flwRef;
        }
        done();
      })
  })
})

describe('POST /api/transactions/verify', () => {
  it('Should successfully verify transaction', done => {
    request.post('/api/transactions/validate')
      .send({
        otp: otp1,
        PBFPubKey,
        transaction_reference
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp.body).to.not.be.undefined;
        expect(resp.body.data).to.have.include.all.keys(
          'avsresponsecode',
          'avsresponsemessage',
          'otptransactionidentifier',
          'redirecturl',
          'responsecode',
          'responsehtml',
          'responsemessage',
          'responsetoken',
          'transactionreference',
        );
        done();
      })
  })
})

describe('POST /api/transactions/qr', () => {
  it('Create payent qr', done => {
    request.post('/api/transactions/qr')
      .send(qr_req)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp.body).to.not.be.undefined;
        expect(resp.body.data).to.have.include.all.keys(
          'avsresponsecode',
          'avsresponsemessage',
          'otptransactionidentifier',
          'redirecturl',
          'responsecode',
          'responsehtml',
          'responsemessage',
          'responsetoken',
          'transactionreference',
        );
        done();
      })
  })
})