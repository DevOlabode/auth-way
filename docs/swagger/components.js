const security = require('./security');

module.exports = {
  securitySchemes: security,
  schemas: {
    ErrorResponse: {
      type: 'object',
      properties: {
        error: { type: 'string' },
        code: { type: 'string' }
      }
    },
    AuthResponse: {
      type: 'object',
      properties: {
        token: { type: 'string' },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' }
          }
        }
      }
    }
  }
};
