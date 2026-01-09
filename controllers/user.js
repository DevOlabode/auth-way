const User = require('../models/user');

module.exports.dashboard = async(req, res)=>{
    const user = await User.findById(req.user._id);
    res.render('user/dashboard', {user, title : 'Dashboard'})
};