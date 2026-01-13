const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.ENDUSER_JWT_SECRET;
const JWT_EXPIRES_IN = '7d';

module.exports.signEndUserToken = (endUser, app) => {
  return jwt.sign(
    {
      sub: endUser._id,
      app: app._id,
      email: endUser.email
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};