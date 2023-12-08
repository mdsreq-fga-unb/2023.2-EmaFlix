const mongoose = require('mongoose');

const Video = require('../model/videoModel.js');

const getVideos = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getVideos;


