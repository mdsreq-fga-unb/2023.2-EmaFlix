const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    ContentId: Number,
    title: String,
    age: String,
    tags: [String],
    poster: String,
    genre: [String],
  });

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;