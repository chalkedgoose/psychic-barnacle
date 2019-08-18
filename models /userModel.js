const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    profile_picture: {
        type: String,
        required: true,
        default: "N/A"
    }
});

module.exports = mongoose.model('User', userSchema);