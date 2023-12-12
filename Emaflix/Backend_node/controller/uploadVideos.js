const Mongoose = require("mongoose")
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const VideoCaminho = require('../model/videoCaminhoModel.js');
const Video = require('../model/videoModel.js');

const storage = new Storage({
    projectId: 'sunny-advantage-407923',
    keyFilename: './controller/sunny-advantage-407923-b2a7d02baa2b.json'
});
const bucket = storage.bucket('armazem-recanto');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 50 * 1024 * 1024
    }
});

const uploadVideos = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Nenhum arquivo foi enviado.');
        }
        const {title, age, tags, genre, synopsis, id} = req.body;
        const videoFile = req.file;
        const blob = bucket.file(videoFile.originalname);

        const blobStream = blob.createWriteStream({
            resumable: false
        });

        blobStream.on('finish', async () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            const newVideo = new VideoCaminho({ path: publicUrl, ContentId:id, synopsis: synopsis });
            await newVideo.save();

            const NewInfo = new Video({ ContentId:id, title: title, age: age, tags: tags, poster: "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177684910/poster-homem-aranha-no-aranhaverso-g-a10251a0.jpg", genre: genre });
            await NewInfo.save();

            return res.status(201).send({ path: publicUrl });
        });

        blobStream.end(videoFile.buffer);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro no upload do vídeo.');
    }
};


module.exports = { uploadVideos, upload };
