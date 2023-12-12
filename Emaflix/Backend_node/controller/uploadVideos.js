const Mongoose = require("mongoose")
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const VideoCaminho = require('../model/videoCaminhoModel.js');

const storage = new Storage({
    projectId: 'sunny-advantage-407923',
    keyFilename: '../../sunny-advantage-407923-b2a7d02baa2b.json'
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

        const videoFile = req.file;
        const blob = bucket.file(videoFile.originalname);

        const blobStream = blob.createWriteStream({
            resumable: false
        });

        blobStream.on('finish', async () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            const newVideo = new Video({ path: publicUrl });
            await newVideo.save();

            return res.status(201).send({ path: publicUrl });
        });

        blobStream.end(videoFile.buffer);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro no upload do vídeo.');
    }
};


module.exports = { uploadVideos, upload };
