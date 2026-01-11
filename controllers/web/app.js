const App = require('../../models/app');

module.exports.newForm = (req, res)=>{
    res.render('app/new', {title : 'New App'});
}