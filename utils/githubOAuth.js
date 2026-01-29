const axios = require('axios');
const { ApiError } = require('./apiError');

exports.exchangeCodeForToken = async ({ code, clientId, clientSecret }) => {
  try {
    const { data } = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: clientId,
        client_secret: clientSecret,
        code
      },
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    if (!data.access_token) {
      throw new ApiError(400, 'INVALID_GITHUB_CODE', 'Failed to exchange GitHub code');
    }

    return data.access_token;
  } catch {
    throw new ApiError(400, 'GITHUB_OAUTH_FAILED', 'GitHub token exchange failed');
  }
};

exports.getGitHubProfile = async (accessToken) => {
  const { data: profile } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const { data: emails } = await axios.get(
    'https://api.github.com/user/emails',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  const primaryEmail = emails.find(e => e.primary && e.verified);

  if (!primaryEmail) {
    throw new ApiError(403, 'EMAIL_NOT_VERIFIED', 'GitHub email not verified');
  }

  return {
    githubId: profile.id.toString(),
    name: profile.name || profile.login,
    email: primaryEmail.email
  };
};
