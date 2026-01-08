const User = require('../models/user');

const passport = require('passport');

module.exports.loginForm = (req, res)=>{
    res.render('auth/login')
};

module.exports.login = async (req, res) => {
    req.user.lastLoginAt = new Date();
    await req.user.save();

    req.flash('success', 'Welcome back');
    res.redirect('/dashboard');
};