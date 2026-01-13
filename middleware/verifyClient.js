const App = require('../../models/app');

module.exports.verifyClient = async (req, res, next) => {
  try {
    const clientId = req.header('X-Client-Id');
    const authHeader = req.header('Authorization');

    if (!clientId || !authHeader) {
      return res.status(401).json({
        error: 'Missing client credentials'
      });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts[0] !== 'Bearer' || !tokenParts[1]) {
      return res.status(401).json({
        error: 'Invalid authorization format'
      });
    }

    const clientSecret = tokenParts[1];

    const app = await App.findOne({ clientId, deletedAt: null })
      .select('+clientSecretHash');

    if (!app) {
      return res.status(401).json({
        error: 'Invalid client'
      });
    }

    if (!app.isActive) {
      return res.status(403).json({
        error: 'App is disabled'
      });
    }

    const isValid = await app.verifyClientSecret(clientSecret);

    if (!isValid) {
      return res.status(401).json({
        error: 'Invalid client secret'
      });
    }

    // Attach app to request
    req.appClient = app;
    next();

  } catch (err) {
    console.error('verifyClient error:', err);
    res.status(500).json({
    error: 'Internal authentication error'
    });
  }
};