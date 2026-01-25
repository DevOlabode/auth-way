// utils/refreshToken.js
const crypto = require('crypto');
const RefreshToken = require('../models/refreshToken');

module.exports.createRefreshToken = async ({
  endUser,
  app,
  ipAddress,
  userAgent,
  expiresInDays = 30,
}) => {
  const rawToken = crypto.randomBytes(64).toString('hex');
  const tokenHash = RefreshToken.hashToken(rawToken);

  const refreshToken = await RefreshToken.create({
    endUser: endUser._id,
    app: app._id,
    tokenHash,
    expiresAt: new Date(
      Date.now() + expiresInDays * 24 * 60 * 60 * 1000
    ),
    ipAddress,
    userAgent,
  });

  return {
    rawToken,
    refreshToken,
  };
};
