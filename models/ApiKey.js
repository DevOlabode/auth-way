const mongoose = require('mongoose');
const {Schema} = mongoose;

const ApiKeySchema = new Schema({
    key: { 
        type: String, 
        unique: true 
    },
    app: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'App' 
    },
    scopes: [String],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('ApiKey', ApiKeySchema);