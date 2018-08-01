const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;
const {
  payload1,
  PBFPubKey,
  otp1
} = require('./utils')

const payment = {
  amount: 6000,
  transaction_reference: 'no_ref',
  account: 'nsdsoone',
  description: 'sdno desc',
  status: 'failed'
}

describe('POST /payment', () => {
  it('Should create a payment', done => {
    request.post('/api/payments/create')
      .send(payment)
      .set('Accept', 'application/json')
      .end((err, resp) => {
        if (err) return done(err)
        expect(resp.body).to.have.include.all.keys('_id', 'createdAt', 'amount')
        expect(resp.body.amount).to.equal(payment.amount)
        expect(resp.body.account).to.equal(payment.account)
        done();
      })
  })
})