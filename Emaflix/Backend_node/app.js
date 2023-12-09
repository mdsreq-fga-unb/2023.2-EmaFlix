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

////////////////////////////////////
const jwt = require('jsonwebtoken');
const User = require('./auth/UserModel.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username: username}, '-_id');

        if(!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        if(!user.username || (password !== user.password)) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ id: user.id, myvideos: [user.myvideos] }, 'segredo', { expiresIn: '3h' });
        res.json({ token });
    } catch (error) {
        res.status
    }
});

//////////////////////////////

app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
