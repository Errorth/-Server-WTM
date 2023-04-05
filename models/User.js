const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
    }\
});

const User = mongoose.model('User', userSchema);

module.exports = User;