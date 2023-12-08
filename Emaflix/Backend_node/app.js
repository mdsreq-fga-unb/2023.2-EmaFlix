const { profileEnd } = require('console');
const express = require('express');
const Video = require('./model/videoModel.js');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../arquivos.env' });
const app = express();
const cors = require('cors');
const getVideos = require('./controller/videosController.js');
const getVideosCaminho = require('./controller/videoCaminhoController.js');

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


app.get('/videos', getVideos);
app.get('/videospath', getVideosCaminho);

// // Outras rotas para adicionar vídeos, detalhes, atualizar, etc.

app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
