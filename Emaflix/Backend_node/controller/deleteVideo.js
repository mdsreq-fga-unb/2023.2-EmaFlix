const VideoModel = require('../model/videoCaminhoModel.js');
const Video = require('../model/videoModel.js');
const mongoose = require('mongoose');

const deleteVideo = async (req, res) => {
    const { id } = req.body;
    try {
        const response = await VideoModel.findOneAndDelete({ContentId: id});
        const video = await Video.findOneAndDelete({ContentId: id});
        res.status(200).json({ message: "Video Apagado com sucesso"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao apagar video"});
    }
}

exports.deleteVideo = deleteVideo;
