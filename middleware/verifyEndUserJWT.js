const jwt = require('jsonwebtoken');
const EndUser = require('../models/EndUser');
const App = require('../models/App');

const JWT_SECRET = process.env.ENDUSER_JWT_SECRET;

module.exports.verifyEndUserJWT = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Missing or invalid Authorization header'
      });
    }

    const token = authHeader.split(' ')[1];

    const payload = jwt.verify(token, JWT_SECRET);

    const app = await App.findById(payload.app);

    if (!app || !app.isActive) {
      return res.status(401).json({
        error: 'Invalid or inactive app'
      });
    }

    const endUser = await EndUser.findById(payload.sub);

    if (!endUser) {
      return res.status(401).json({
        error: 'User not found'
      });
    }

    req.endUser = endUser;
    req.app = app;

    next();
  } catch (err) {
    return res.status(401).json({
      error: 'Invalid or expired token'
    });
  }
};