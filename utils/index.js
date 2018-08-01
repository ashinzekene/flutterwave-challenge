const { signJWT } = require('./auth')();

module.exports.makeUser = (user) => {
  const { id, username, email, createdAt, updatedAt, password } = user;
  const jwt = signJWT(user.id, user.username);
  return { id, username, email, createdAt, updatedAt, password, jwt };
  return
}