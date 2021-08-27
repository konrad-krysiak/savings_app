const expressJwt = require('express-jwt');
const config = require('config.js');
const userService = require('/routes/user.js');

module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
    path: [
      //public routes that dont require authentication
    ],
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  //revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}
