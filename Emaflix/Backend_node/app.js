const { profileEnd } = require('console');
const express = require('express');
const Video = require('./model/videoModel.js');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../arquivos.env' });
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const getVideos = require('./controller/videosController.js');
const getVideosCaminho = require('./controller/videoCaminhoController.js');

const {login, register} = require('./auth/login.js');

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

//Chama os vídeos
app.get('/videos', getVideos);
app.get('/videospath', getVideosCaminho);
//Chama o login
app.post('/login', login);
app.post('/register', register);

//////////////////////////////

app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
