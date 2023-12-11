const mongoose = require('mongoose');
const UserModel = require('../auth/userModel.js');

const getUser = async (req, res) => {
    try {
        const users = await UserModel.find({ "actions": { $in: ["user", "conf"] } });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const chargePermission = async (req, res) => {
    const { username, newactions } = req.body;
    try {
        const user = await UserModel.findOneAndUpdate(
            { username: username },
            { $set: { actions: newactions } },
            { new: true }
        );
        console.log(user);
        if (!user) {
            console.log("Algo deu errado ao atualizar os dados!");
        } else {
            console.log(user);
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {getUser, chargePermission};