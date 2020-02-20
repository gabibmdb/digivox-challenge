//importando o express
const express = require('express');
const routes = express.Router();

//importanto os controllers js da pasta controllers para a rota
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');
const loanController = require('./controllers/loanController');

//Rotas de usuários
routes.get('/users', userController.index);
routes.post('/users', userController.store);
routes.get('/users/:id', userController.indexOne);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

//Rotas de livros
routes.get('/books', bookController.index);
routes.post('/books', bookController.store);
routes.get('/books/:id', bookController.indexOne);
routes.put('/books/:id', bookController.update);
routes.delete('/books/:id', bookController.delete);

//Rotas de empréstimos
routes.get('/loans', loanController.index);
routes.post('/loans', loanController.store);
routes.get('/loans/:id', loanController.indexOne);
routes.put('/loans/:id', loanController.update);
routes.delete('/loans/:id', loanController.delete);

module.exports = routes;