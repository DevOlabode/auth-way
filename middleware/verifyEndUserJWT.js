const jwt = require('jsonwebtoken');
const EndUser = require('../models/EndUser');
const App = require('../models/App');

const JWT_SECRET = process.env.ENDUSER_JWT_SECRET;

module.exports.verifyEndUserJWT =  async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing token' });
    }

    const token = authHeader.split(' ')[1];

    const payload = jwt.verify(token, process.env.ENDUSER_JWT_SECRET);

    const endUser = await EndUser.findById(payload.sub);

    if (!endUser) {
      return res.status(401).json({ error: 'User not found' });
    }

    // 🔐 THIS IS THE IMPORTANT PART
    if (payload.tokenVersion !== endUser.tokenVersion) {
      return res.status(401).json({ error: 'Token revoked' });
    }

    req.endUser = endUser;
    req.tokenPayload = payload;

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};