const jwt = require('jsonwebtoken');
const crypto = require('crypto')

if (!process.env.ENDUSER_JWT_SECRET) {
  throw new Error('ENDUSER_JWT_SECRET is not defined');
}

const JWT_SECRET = process.env.ENDUSER_JWT_SECRET;
const JWT_EXPIRES_IN = '7d';

module.exports.signEndUserToken = (endUser, app) => {
  return jwt.sign(
    {
      sub: endUser._id,
      app: app._id,
      email: endUser.email,
      tokenVersion: endUser.tokenVersion
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

exports.signAccessToken = (user, app) => {
  return jwt.sign(
    {
      sub: user._id,
      appId: app._id,
      tokenVersion: user.tokenVersion
    },
    JWT_SECRET,
    { expiresIn: '15m' }
  );
};

exports.signRefreshToken = () => {
  return crypto.randomBytes(64).toString('hex');
};
