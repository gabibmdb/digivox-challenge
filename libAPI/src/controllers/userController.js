//o controller lida com as requisições e respostas do/ao front

const User = require('../models/User');

//Este método store irá servir para armazenar o usuário
//O async/await possibilita que se espere executar a requisição para se obter a resposta

module.exports = {

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async indexOne(req, res) {

        const { id } = req.params;
        const users = await User.findByPk(id);

        return res.json(users);

    },

    async store(req, res) {

        const { name, email } = req.body;
        const user = await User.create({ name, email });

        return res.json(user);
    },

    async update(req, res) {

        const { id } = req.params;
        const user = await User.findByPk(id);
        const updateUser = await user.update(req.body);

        return res.json(updateUser);
    },

    async delete(req, res) {

        const { id } = req.params;

        await User.destroy({ where: {id: id} });

        return res.json("User successfully deleted.");
    }
};
