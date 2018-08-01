const chai = require('chai');
const supertest = require('supertest');
const Users = require('../models/user.model');
const request = supertest(require('../server.js'));
const expect = chai.expect;

const user = {
  username: 'Test user',
  last_name: 'Test name',
  phone_no: '081284475553',
  gender: 'male',
  email: 'testuser@mail.com'
}

let jwt;

describe('POST /users/create', () => {
  before(function() {
    Users.deleteMany({ username: /.+/}, (err) => {
      if (err) return console.log(err)
    })
  });

  it('Should not create user if password is not provided', done => {
    request.post('/api/users/create')
      .send(user)
      .set('Accept', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('errors');
        done();
      })
  })
  it('Should create user', done => {
    user.password = 'testpassword'
    request.post('/api/users/create')
      .send(user)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.have.include.all.keys('id', 'createdAt', 'username', 'email', 'jwt');
        expect(res.body).to.have.property('username', user.username);
        expect(res.body).to.have.property('email', user.email);
        done();
      })
  })
  it('Should encrypt password', done => {
    user.password = 'testpassword'
    user.username = 'user222'
    user.email = 'anotheremail@mail.com'
    request.post('/api/users/create')
    .send(user)
    .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.have.include.all.keys('id', 'createdAt', 'username', 'email', 'jwt');
        expect(res.body).to.have.property('username', user.username);
        expect(res.body.password).to.not.equal(user.email.password);
        done();
      })
  })
  it('Should not login with invalid credentials', done => {
    user.password = 'testpassword---!--'
    user.username = 'user222'
    const { username, password } = user;
    request.post('/api/users/login')
      .send({ username, password })
      .set('Accept', 'application/json')
      .expect(401)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.be.empty
        done();
      })
  })
  it('Should login successfully', done => {
    user.password = 'testpassword'
    user.username = 'user222'
    const { username, password } = user;
    request.post('/api/users/login')
      .send({ username, password })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.have.include.all.keys('id', 'createdAt', 'username', 'email', 'jwt');
        expect(res.body).to.have.property('username', user.username);
        jwt = res.body.jwt;
        expect(res.body.password).to.not.equal(user.email.password);
        done();
      })
  })
  it('Should authenticate with jwt', done => {
    request.get('/api/users/protected')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${jwt}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).to.have.include.all.keys('id', 'createdAt', 'username', 'email');
        expect(res.body).to.have.property('username', user.username);
        done();
      })
  })
})