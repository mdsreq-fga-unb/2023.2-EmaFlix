const VideoCaminho = require('../model/videoCaminhoModel');
const Video = require('../model/videoModel');

const getVideoCaminho = async (req, res) => {
  try {
    const video = await VideoCaminho.find({}, '-_id -__v');

    if (!video) {
      return res.status(404).json({ message: 'Vídeo não encontrado' });
    }

    res.json({ video });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMovieDetail = async (req, res) => {
  try {
    const movieDetail = await Video.find({}, '-_id -__v');

    if (!movieDetail) {
      return res.status(404).json({ message: 'Detalhes do vídeo não encontrados' });
    }

    res.json({ movieDetail });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const AdicionarComentario = async (req, res) => {
  try {
    const { comment, id } = req.body;
    console.log(req.body);

    const update = await VideoCaminho.updateOne(
      { "ContentId": id },
      { $push: { "comments": comment } }
    );
    console.log(update);
    if (!update) {
      return res.status(404).json({ message: 'Não foi possível adicionar o comentário' });
    }

    res.json({ message: 'Comentário adicionado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getVideoCaminho,
  getMovieDetail,
  AdicionarComentario
}

