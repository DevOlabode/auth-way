const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'App'
    },
    isActive: { 
        type: Boolean, 
        default: true 
    }
});

module.exports = mongoose.model('App', AppSchema);