const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    actions: String,
    myvideos: [Number]
});

let UserModel;

if (mongoose.models.User) {
    UserModel = mongoose.model('User');
} else {
    UserModel = mongoose.model('User', userSchema);
}

module.exports = UserModel;
