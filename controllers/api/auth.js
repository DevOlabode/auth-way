const EndUser = require('../../models/endUser');

const {signEndUserToken} = require('../../utils/jwt');


//Register Route
module.exports.register = async(req, res)=>{
    const {email, password} = req.body;

    const app = req.appClient;

    if (!email || !password) {
        return res.status(400).json({
          error: 'Email and password are required'
        });
    };

    const existingUser = await EndUser.findOne({
        app : app._id,
        email
    });

    if(existingUser){
        return res.status(409).json({
            error : 'User with that email already exists'
        });
    }

    const user = new EndUser({
        app : app._id,
        email
    });

    await user.setPassword(password);
    await user.save();
  
    const token = signEndUserToken(user, app);
  
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });
};


//login Controller 
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const app = req.appClient;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required'
    });
  }

  const user = await EndUser.findOne({
    app: app._id,
    email,
    deletedAt: null
  }).select('+passwordHash');

  if (!user) {
    return res.status(401).json({
      error: 'Invalid credentials'
    });
  }

  const isValid = await user.verifyPassword(password);

  if (!isValid) {
    return res.status(401).json({
      error: 'Invalid credentials'
    });
  }

  user.lastLoginAt = new Date();
  await user.save();

  const token = signEndUserToken(user, app);

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      email: user.email
    }
  });
};


//Profile Controller.
module.exports.me = async (req, res) => {
  const user = req.endUser;

  res.status(200).json({
    id: user._id,
    email: user.email,
    createdAt: user.createdAt,
    app: user.app
  });
};


// logout controller
module.exports.logout = async (req, res) => {
  const user = req.endUser;

  user.tokenVersion += 1;
  await user.save();

  res.status(200).json({
    message: 'Logged out successfully'
  });
};

