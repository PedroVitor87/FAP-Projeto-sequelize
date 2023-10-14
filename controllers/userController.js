const User = require('../models/userModels');

exports.createUser = async (req, res) => {
    try {
        const {nome, email} = req.body;
        console.log(nome, email);
        const newUser = await User.create({nome, email});
        console.log("Cadastrado com sucesso");
        res.json(newUser);

    } catch (error) {
        res.json({error: error.message});
    }
}


exports.getUser = async (req,res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({error: error.message});   
    }
}
