const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;

const employee = {
  first_name: 'Test employee',
  last_name: 'Test name',
  account_no: '038448858585',
  phone_no: '081284475553',
  bank_name: 'Zenith',
  gender: 'Male',
}

describe('POST /employees/create', () => {
  it('Should not create employee is user is unauthenticated', done => {
    request.post('/api/employees/create')
      .send(employee)
      .set('Accept', 'application/json')
      .expect(401)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.text).to.equal('Unauthorized')
        done();
      })
  })
})