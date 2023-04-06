const mongoose = require('mongoose');


const userSchemas = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true},
    name:{type: String, required: true},
    phone: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, default: undefined},
    isAdmin: {type: Boolean,},
    createdAt: {type: Date, default: Date.now()}
}, {id: false});

const User = mongoose.model('User', userSchemas);

module.exports = User;
