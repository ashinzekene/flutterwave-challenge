const chai = require('chai');
const supertest = require('supertest');
const request = supertest(require('../server.js'));
const expect = chai.expect;

const staff = {
  first_name: 'Test staff',
  last_name: 'Test name',
  account_no: '038448858585',
  phone_no: '081284475553',
  bank_name: 'Zenith',
  gender: 'Male',
}

describe('POST /staffs/create', () => {
  it('Should not create staff is user is unauthenticated', done => {
    request.post('/api/staffs/create')
      .send(staff)
      .set('Accept', 'application/json')
      .expect(401)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.text).to.equal('Unauthorized')
        done();
      })
  })
})