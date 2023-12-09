const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema({
    username: String,
    password: String,
    actions: String,
    myvideos: [Number]
});

const UserModel = mongoose.model('User', UserModelSchema);

module.exports = UserModel;