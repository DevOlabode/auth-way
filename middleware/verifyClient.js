const App = require('../models/App');
const { ApiError } = require('../utils/apiError');

module.exports.verifyClient = async (req, res, next) => {
  const clientId = req.header('X-Client-Id');
  const authHeader = req.header('Authorization');

  if (!clientId || !authHeader) {
    throw new ApiError(
      401,
      'MISSING_CLIENT_CREDENTIALS',
      'Client ID and client secret are required'
    );
  }

  const [scheme, clientSecret] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !clientSecret) {
    throw new ApiError(
      401,
      'INVALID_AUTH_FORMAT',
      'Authorization header must be in the format: Bearer <client_secret>'
    );
  }

  const app = await App.findOne({
    clientId,
    deletedAt: null
  }).select('+clientSecretHash');

  if (!app) {
    throw new ApiError(
      401,
      'INVALID_CLIENT',
      'Invalid client credentials'
    );
  }

  if (!app.isActive) {
    throw new ApiError(
      403,
      'APP_DISABLED',
      'This application is disabled'
    );
  }

  const isValid = await app.verifyClientSecret(clientSecret);

  if (!isValid) {
    throw new ApiError(
      401,
      'INVALID_CLIENT_SECRET',
      'Invalid client credentials'
    );
  }

  req.appClient = app;
  next();
};
