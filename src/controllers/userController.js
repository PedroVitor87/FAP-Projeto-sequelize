const User = require('../models/userModel');

//Lista usuários cadastrados no Banco de dados
const getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).render('users', {users});
    } catch (error) {
        res.status(500).json({error: error.message});    
    };
};

//Cria usuários com nome, email e idade
const createUser = async (req, res) => {
    try {
        const {name, email, age} = req.body; 
        const newUser = await User.create({name, email, age});
        res.status(201).json({message: "Usuário cadastrado com sucesso", user: newUser });
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

//Atualiza usuários
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const {name, email, age} = req.body;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({error: 'Usuário não encontrado'});
        }

        user.name = name;
        user.email = email;
        user.age = age;
        await user.save();

        res.redirect("/usuarios");
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

//Exclui usuários
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({error: 'Usuário não encontrado'});
        }

        await user.destroy();

        res.status(200).json({message: 'Usuário excluído com sucesso'});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

//View do formulário para cadastrar usuário
const displayForm = (req, res) => {
    res.render('registerUser');
};

//View do formulário para atualizar usuário
const displayUpdateForm = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({error: 'Usuário não encontrado'});
        }
        res.status(200).render('updateUser', {user});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = {
    getUser,
    createUser,
    displayForm,
    updateUser,
    displayUpdateForm,
    deleteUser
};
