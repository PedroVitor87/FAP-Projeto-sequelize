const User = require('../models/userModel');

//Listar usuários cadastrados no Banco de dados
const getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('users', { users }); //
    } catch (error) {
        res.json({ error: error.message });
    }
};

//Cria usuários com nome, email e idade
const createUser = async (req, res) => {
    try {
        const {name, email, age} = req.body; //Pega as informações do corpo da requisição
        const newUser = await User.create({name, email, age}); //Cria um novo usuário no banco de dados
        console.log("Cadastrado com sucesso");
        res.json(newUser);
    } catch (error) {
        res.json({error: error.message});
    }
}

//View do formulário para cadastrar usuário
const displayForm = (req, res) => {
    res.render('registerUser')
}

//View do formulário para cadastrar usuário
const displayUpdateForm = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.render('updateUser', { user });
    } catch (error) {
        res.json({ error: error.message });
    }
};

//Atualiza usuários
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, age } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Atualiza os dados do usuário
        user.name = name;
        user.email = email;
        user.age = age;

        // Salva as alterações
        await user.save();

        // Redireciona para a lista de usuários
        res.redirect("/usuarios");
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Exclui usuários usando o método DELETE
const deleteUserByDeleteMethod = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();

        res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        res.json({ error: error.message });
    }
};

//Exclui usuários
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();

        res.redirect("/usuarios");
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = {
    getUser,
    createUser,
    displayForm,
    updateUser,
    displayUpdateForm,
    deleteUser,
    deleteUserByDeleteMethod
};
