const { profileEnd } = require('console');
const express = require('express');
const Video = require('./model/videoModel.js');
const mongoose = require('mongoose');
require('dotenv').config({path: '../arquivos.env'});
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const mongoUrl = process.env.MONGO_URL;

app.use(cors());

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("Conectado ao banco de dados");
}).catch((error) => {
    console.log("Erro ao conectar ao banco de dados: " + error);
});



app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// // Definição do modelo para a coleção de detalhes dos vídeos
// const MovieDetail = mongoose.model('movieDetails', {
//     ContentId: String,
//     path: String,
//     synopsis: String,
//     comments: [String],
//     feedback: String,
//   });

// // Rota para obter os detalhes de um vídeo pelo ContentId
// app.get('/videos/:ContentId', async (req, res) => {
//   try {
//     const contentId = req.params.contentId;
//     console.log(contentId);
//     const video = await Video.findOne({}, '-_id -__v');

//     if (!video) {
//       return res.status(404).json({ message: 'Vídeo não encontrado' });
//     }

//     const movieDetail = await MovieDetail.findOne({ }, '-_id -__v');
//     if (!movieDetail) {
//       return res.status(404).json({ message: 'Detalhes do vídeo não encontrados' });
//     }

//     res.json({ video, movieDetail });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Outras rotas para adicionar vídeos, detalhes, atualizar, etc.

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
