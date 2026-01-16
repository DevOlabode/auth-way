const swaggerJsdoc = require('swagger-jsdoc');

module.exports = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'AuthWay API',
      version: '1.0.0',
      description: `
AuthWay is a multi-tenant authentication API for managing end-user authentication
across multiple applications.

### Authentication Types
- **Client Authentication** (X-Client-Id + Client Secret)
- **End User Authentication** (JWT)
      `,
      contact: {
        name: 'AuthWay',
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development'
      }
    ]
  },
  apis: ['./docs/swagger/**/*.js']
});
