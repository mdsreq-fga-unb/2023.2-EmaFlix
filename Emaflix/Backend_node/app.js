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
const {getMovieDetail, AdicionarComentario, getVideoCaminho, RemoverComentario, SalvarMyvideo, RemoverMyvideo} = require('./controller/videoCaminhoController.js');
const {uploadVideos, upload} = require('./controller/uploadVideos.js');
const {login, register} = require('./auth/login.js');
const {getUser, chargePermission} = require('./controller/configurarUser.js');

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
app.get('/videos', getVideoCaminho);
app.get('/videospath', getMovieDetail);
//Chama o login
app.post('/login', login);
app.post('/register', register);
app.put('/addcomentario', AdicionarComentario);
app.put('/removecomentario', RemoverComentario);
app.get('/userconfig', getUser);
app.put('/chargepermissao', chargePermission);
app.put('/savemyvideo', SalvarMyvideo);
app.put('/removemyvideo', RemoverMyvideo);
app.post('/upload', upload.single('video'), uploadVideos)

//////////////////////////////

app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
