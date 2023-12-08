const VideoCaminho = require('../model/videoCaminhoModel');
const Video = require('../model/videoModel');

const getVideosCaminho = async (req, res) => {
    try {
        const video = await VideoCaminho.findOne({}, '-_id -__v');

        if (!video) {
            return res.status(404).json({ message: 'Vídeo não encontrado' });
        }
        const movieDetail = await Video.findOne({}, '-_id -__v');
        if (!movieDetail) {
            return res.status(404).json({ message: 'Detalhes do vídeo não encontrados' });
        }

        res.json({ video, movieDetail });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getVideosCaminho;

