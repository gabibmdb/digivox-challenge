const Book = require('../models/Book');


module.exports = {

    async index(req, res) {

        const books = await Book.findAll();

        return res.json(books);
    },

    async indexOne(req, res) {

        const { id } = req.params;
        const books = await Book.findByPk(id);

        return res.json(books);
    },

    async store(req, res) {

        const { title, author } = req.body;
        const book = await Book.create({ title, author });

        return res.json(book);
    },

    async update(req, res) {

        const { id } = req.params;
        const book = await Book.findByPk(id);
        const updateBook = await book.update(req.body);

        return res.json(updateBook);
    },

    async delete(req, res) {

        const { id } = req.params;

        await Book.destroy({ where: {id: id} });

        if (!id) {
            return res.status(400).json({ error: "Couldn't find book" })
        }

        return res.json("Book successfully deleted.");
    }
};