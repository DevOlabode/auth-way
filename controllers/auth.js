const User = require('../models/user');

module.exports.loginForm = (req, res)=>{
    res.render('auth/login')
};