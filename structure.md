authway/
├── src/
│   ├── app.js                # Express app setup
│   ├── server.js             # HTTP server bootstrap
│
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   ├── passport.js        # Passport strategies (dashboard auth)
│   │   ├── jwt.js             # JWT config
│   │   └── mailer.js          # Nodemailer / email config
│
│   ├── models/
│   │   ├── User.js            # End users (per app)
│   │   ├── Developer.js       # AuthWay dashboard users
│   │   ├── App.js             # Developer-created apps
│   │   ├── ApiKey.js          # API keys for apps
│   │   └── Token.js           # Verify/reset tokens
│
│   ├── routes/
│   │   ├── web/
│   │   │   ├── auth.routes.js       # Login / register (dashboard)
│   │   │   ├── dashboard.routes.js
│   │   │   └── apps.routes.js       # Create app, rotate keys
│   │   │
│   │   ├── api/
│   │   │   ├── auth.routes.js       # register/login (JWT)
│   │   │   ├── users.routes.js
│   │   │   └── health.routes.js
│   │   │
│   │   └── index.js                 # Route aggregator
│
│   ├── controllers/
│   │   ├── web/
│   │   │   ├── auth.controller.js
│   │   │   ├── dashboard.controller.js
│   │   │   └── apps.controller.js
│   │   │
│   │   ├── api/
│   │   │   ├── auth.controller.js
│   │   │   └── users.controller.js
│
│   ├── middleware/
│   │   ├── requireLogin.js          # Passport session auth
│   │   ├── requireApiKey.js
│   │   ├── requireJwt.js
│   │   ├── rateLimit.js
│   │   └── errorHandler.js
│
│   ├── services/
│   │   ├── auth.service.js          # Core auth logic
│   │   ├── token.service.js         # JWT + verify tokens
│   │   ├── email.service.js
│   │   └── apiKey.service.js
│
│   ├── utils/
│   │   ├── crypto.js
│   │   ├── logger.js
│   │   └── validators.js
│
│   ├── views/
│   │   ├── layouts/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── emails/
│
│   ├── public/
│   │   ├── css/
│   │   └── js/
│
│   └── tests/
│       ├── api/
│       └── unit/
│
├── .env
├── package.json
└── README.md
