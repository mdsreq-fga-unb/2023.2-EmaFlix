const mongoose = require('mongoose');

const VideoCaminhoSchema = new mongoose.Schema({
    ContentId: String,
    path: String,
    synopsis: String,
    comments: [String],
    feedback: String,
});

const VideoCaminho = mongoose.model('VideoCaminho', VideoCaminhoSchema);

module.exports = VideoCaminho;