const Loan = require('../models/Loan');


module.exports = {

    async index(req, res) {

        const loans = await Loan.findAll();

        return res.json(loans);
    },

    async indexOne(req, res) {

        const { user_id } = req.params;
        const loans = await Loan.findByPk(user_id, {

            include: { association: 'loans' }

        });

        return res.json(loans);
        
    },

    async store(req, res) {

        const { user_id, book_id } = req.body;
        const loan = await Loan.create({ user_id, book_id });

        return res.json(loan);
    },

    async update(req, res) {

        const { id } = req.params;
        const loan = await Loan.findByPk(id);
        const updateLoan = await loan.update(req.body);

        return res.json(updateLoan);
    },

    async delete(req, res) {
        
        const { id } = req.params;

        await Loan.destroy({ where: {id: id} });

        return res.json("Loan successfully erased.");
    }
};