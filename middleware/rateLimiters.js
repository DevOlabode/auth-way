const rateLimit = require('express-rate-limit');
const { ipKeyGenerator } = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => ipKeyGenerator(req),
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many attempts. Try again later.' },
  keyGenerator: (req) => ipKeyGenerator(req),
});

const webAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  keyGenerator: (req) => ipKeyGenerator(req),
});

module.exports = {
  apiLimiter,
  authLimiter,
  webAuthLimiter,
};
