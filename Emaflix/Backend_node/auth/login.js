const User = require('./UserModel.js');
const jwt = require('jsonwebtoken');

async function login(req, res) {
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
        res.json({ token, user: { username: user.username, actions: user.actions, myvideos: user.myvideos } });
    } catch (error) {
        res.status
    }
};

async function register(req, res) {
    const { username, password } = req.body;

    try {
        const UserExiste = await User.findOne({ username });
        if (UserExiste) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }

        const user = new User({ username, password, actions: 'user', myvideos: [] });
        await user.save();
        return res.json({ message: 'Usuário registrado com sucesso' });

    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar o usuário' });
    }
};

module.exports = {
    login,
    register
};