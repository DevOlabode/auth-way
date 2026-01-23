<!-- # voult.dev – Product Roadmap

A centralized authentication-as-a-service platform for developers.

---

## ✅ MVP – COMPLETE (API-FIRST)

### 🔐 Core Authentication (End Users)
- [x] Register (email + password)
- [x] Login
- [x] Logout (JWT revocation via tokenVersion)
- [x] Get current user (`/me`)
- [x] Email verification flow
- [x] Resend verification email (rate-limited)
- [x] Password reset (forgot + reset)
- [x] Password strength enforcement
- [x] Soft delete / disable account
- [x] Re-enable account
- [x] Prevent login for disabled accounts
- [x] Prevent login for unverified emails

---

### 🧩 App / Client Authentication
- [x] Client ID + Client Secret auth
- [x] Secure client secret hashing
- [x] Client secret rotation
- [x] App enable / disable
- [x] Callback URL allowlist validation
- [x] Per-app usage tracking (logins, registrations)
- [x] App soft delete support

---

### 🛡 Security & Abuse Protection
- [x] Rate limiting (API + auth routes)
- [x] Token expiration handling
- [x] Token revocation on logout / password reset
- [x] Consistent API error format (`ApiError`)
- [x] Centralized API error handler
- [x] Request + auth failure logging

---

### 📄 Developer Experience
- [x] Swagger / OpenAPI documentation
- [x] Postman collection
- [x] Example Node.js SDK
- [x] Example API usage flows
- [x] Clear separation of Web vs API auth logic

---

### 🧠 Architecture Quality
- [x] Modular middleware structure
- [x] CatchAsync error handling
- [x] Joi validation layer
- [x] Clean folder separation (controllers, services, validators)
- [x] Environment-based configuration
- [x] Production-ready JWT handling

---

## 🚀 V1 – NEXT MAJOR RELEASE

### 🔐 Authentication & Sessions
- [ ] Refresh token support (short-lived access tokens)
- [ ] Refresh token rotation + reuse detection
- [ ] Session tracking (list active sessions)
- [ ] Revoke specific sessions
- [ ] Account lockout after repeated failed logins
- [ ] Optional MFA (email OTP)

---

### 🌐 Social & OAuth Login
- [ ] Login with Google
- [ ] Login with GitHub
- [ ] Login with Facebook
- [ ] Login with Apple
- [ ] OAuth account linking (password ↔ social)
- [ ] Handle existing email collisions across providers
- [ ] Store provider metadata (providerId, avatar, profile)
- [ ] Per-app enable / disable social providers

---

### 🧩 OAuth Provider Configuration
- [ ] Configure OAuth credentials per app
  - [ ] Google Client ID & Secret
  - [ ] GitHub Client ID & Secret
  - [ ] Facebook App ID & Secret
  - [ ] Apple Service ID & Private Key
- [ ] OAuth redirect URI allowlist
- [ ] Environment-specific OAuth configs (dev / prod)

---

### 📊 App Insights & Auditing
- [ ] App usage dashboard
- [ ] Auth metrics (daily logins, registrations)
- [ ] Audit logs per app
- [ ] Auth event timeline
- [ ] Export logs (CSV / JSON)

---

### 🧠 Developer Experience (V1)
- [ ] SDK refresh token helpers
- [ ] OAuth helpers in SDK
- [ ] More SDK examples (Next.js, Express)
- [ ] OAuth flow diagrams
- [ ] Improved Swagger UI polish
- [ ] Versioned API docs (`/v1`, `/v2`)

---

## 🌱 V2 / FUTURE IDEAS

### 🏢 Enterprise Features
- [ ] Organizations / Teams
- [ ] Role-based access control (RBAC)
- [ ] SSO (SAML / OIDC)
- [ ] IP allowlisting
- [ ] Advanced MFA (TOTP, WebAuthn)

---

### 🧪 Platform Enhancements
- [ ] Webhooks for auth events
- [ ] Web-based admin dashboard
- [ ] Billing & plans
- [ ] Usage-based limits
- [ ] Custom branding (emails, hosted pages)

---

## 🎯 Definition of Done

- Secure, scalable auth platform
- Password + social authentication supported
- OAuth configurable per app
- Clear, consistent API responses
- Observable, auditable auth flows
- Developer-first experience

---

voult.dev 🚀 -->


# voult.dev – Product Roadmap

A developer-first authentication-as-a-service platform with a first-class API **and official SDKs**.

---

## ✅ MVP – COMPLETE (API-FIRST FOUNDATION)

### 🔐 Core Authentication (End Users)
- [x] Register (email + password)
- [x] Login
- [x] Logout (JWT revocation via tokenVersion)
- [x] Get current user (`/me`)
- [x] Email verification flow
- [x] Resend verification email (rate-limited)
- [x] Password reset (forgot + reset)
- [x] Password strength enforcement
- [x] Soft delete / disable account
- [x] Re-enable account
- [x] Prevent login for disabled accounts
- [x] Prevent login for unverified emails

---

### 🧩 App / Client Authentication
- [x] Client token–based authentication
- [x] Secure client token hashing
- [x] Client token rotation
- [x] App enable / disable
- [x] Callback / origin allowlist validation
- [x] Per-app usage tracking (logins, registrations)
- [x] App soft delete support

---

### 🛡 Security & Abuse Protection
- [x] Rate limiting (API + auth routes)
- [x] Token expiration handling
- [x] Token revocation on logout / password reset
- [x] Consistent API error format (`ApiError`)
- [x] Centralized API error handler
- [x] Request + auth failure logging

---

### 🧠 Architecture Quality
- [x] Modular middleware structure
- [x] Async error handling (CatchAsync)
- [x] Joi validation layer
- [x] Clean folder separation (controllers, services, validators)
- [x] Environment-based configuration
- [x] Production-ready JWT handling
- [x] Clear separation of Web auth vs API auth

---

## 🚀 V1 – PLATFORM & SDK RELEASE (NEXT MAJOR PHASE)

### 📦 Official SDKs (CORE FOCUS)
- [ ] Publish official Node.js SDK (`@voult/server-sdk`)
- [ ] Typed TypeScript SDK (first-class support)
- [ ] Unified `VoultClient` abstraction
- [ ] Automatic header injection (`x-client-token`)
- [ ] Built-in error normalization
- [ ] Auth helpers (verify, revoke, rotate)
- [ ] SDK versioning aligned with API versions
- [ ] SDK changelog & migration notes
- [ ] NPM documentation + examples

---

### 🧠 Developer Experience (V1)
- [ ] SDK examples (Express, Next.js, API-only)
- [ ] SDK usage guides (Auth, Sessions, Security)
- [ ] SDK retry + timeout handling
- [ ] SDK environment safety checks (server-only secrets)
- [ ] API versioning (`/v1`, `/v2`)
- [ ] Improved Swagger / OpenAPI polish
- [ ] OAuth & auth flow diagrams
- [ ] CLI scaffold (stretch): `npx voult init`

---

### 🔐 Authentication & Sessions
- [ ] Refresh token support (short-lived access tokens)
- [ ] Refresh token rotation + reuse detection
- [ ] Session tracking (list active sessions)
- [ ] Revoke specific sessions
- [ ] Account lockout after repeated failed logins
- [ ] Optional MFA (email OTP)

---

### 🌐 Social & OAuth Login
- [ ] Login with Google
- [ ] Login with GitHub
- [ ] Login with Facebook
- [ ] Login with Apple
- [ ] OAuth account linking (password ↔ social)
- [ ] Handle existing email collisions across providers
- [ ] Store provider metadata (providerId, avatar, profile)
- [ ] Per-app enable / disable social providers

---

### 🧩 OAuth Provider Configuration
- [ ] Configure OAuth credentials per app
  - [ ] Google Client ID & Secret
  - [ ] GitHub Client ID & Secret
  - [ ] Facebook App ID & Secret
  - [ ] Apple Service ID & Private Key
- [ ] OAuth redirect URI allowlist
- [ ] Environment-specific OAuth configs (dev / prod)

---

### 📊 App Insights & Auditing
- [ ] App usage dashboard
- [ ] Auth metrics (daily logins, registrations)
- [ ] Audit logs per app
- [ ] Auth event timeline
- [ ] Export logs (CSV / JSON)
- [ ] SDK-level request tracing (requestId propagation)

---

## 🌱 V2 – PLATFORM SCALE & ECOSYSTEM

### 🧪 Platform Enhancements
- [ ] Webhooks for auth events
- [ ] Web-based developer dashboard
- [ ] Hosted auth pages (login / register / verify)
- [ ] Custom email templates & branding
- [ ] Usage-based limits & quotas
- [ ] Billing & plans

---

### 🏢 Enterprise Features
- [ ] Organizations / Teams
- [ ] Role-based access control (RBAC)
- [ ] SSO (SAML / OIDC)
- [ ] IP allowlisting
- [ ] Advanced MFA (TOTP, WebAuthn)
- [ ] Compliance readiness (SOC2 groundwork)

---

## 🎯 Definition of Done

- Secure, scalable auth infrastructure
- API-first with official SDKs
- Simple installation (`npm install @voult/server-sdk`)
- OAuth & password authentication supported
- Configurable per-app auth behavior
- Clear, consistent API responses
- Observable, auditable auth flows
- Exceptional developer experience

---

**voult.dev** — authentication infrastructure for builders 🚀
