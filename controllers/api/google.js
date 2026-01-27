const {
    exchangeCodeForToken,
    getGoogleProfile
  } = require('../../utils/googleOAuth');
  
  module.exports.googleLogin = async (req, res) => {
    const { code } = req.body;
    const app = req.appClient;
  
    if (!code) {
      throw new ApiError(400, 'VALIDATION_ERROR', 'Authorization code is required');
    }
  
    if (!app.googleOAuth?.clientId) {
      throw new ApiError(400, 'GOOGLE_NOT_CONFIGURED', 'Google login not enabled');
    }
  
    const accessToken = await exchangeCodeForToken(
      code,
      app.googleOAuth.clientId,
      app.googleOAuth.clientSecret,
      app.googleOAuth.redirectUri
    );
  
    const profile = await getGoogleProfile(accessToken);
  
    const { id: googleId, email, verified_email, name } = profile;
  
    if (!verified_email) {
      throw new ApiError(403, 'EMAIL_NOT_VERIFIED', 'Google email not verified');
    }
  
    let user = await EndUser.findOne({
      app: app._id,
      email,
      deletedAt: null
    });
  
    // 🔁 Existing user → link Google
    if (user) {
      if (!user.googleId) {
        user.googleId = googleId;
        user.authProvider = 'google';
        user.isEmailVerified = true;
        await user.save();
      }
    } else {
      // 🆕 New user
      user = await EndUser.create({
        app: app._id,
        email,
        googleId,
        authProvider: 'google',
        isEmailVerified: true
      });
    }
  
    if (!user.isActive) {
      throw new ApiError(403, 'ACCOUNT_DISABLED', 'Account is disabled');
    }
  
    user.lastLoginAt = new Date();
    await user.save();
  
    const accessJwt = signAccessToken(user, app);
  
    const { rawToken: refreshToken } = await createRefreshToken({
      endUser: user,
      app,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent']
    });
  
    res.status(200).json({
      message: 'Google login successful',
      accessToken: accessJwt,
      refreshToken,
      user: {
        id: user._id,
        email: user.email
      }
    });
  };
  