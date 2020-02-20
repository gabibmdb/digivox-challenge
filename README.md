# digivox-challenge
Digivox Library Challenge

Desafio Digivox – Loja de Aluguel de Livros 

    Neste projeto foi criado um CRUD funcional, com todas as rotas de usuários, livros e empréstimos executando o create, read, update e delete;

Tecnologias: 

    NodeJS, ReactJS e Postgres;

Dependências e requerimentos para rodar a API:

    Instalar o NodeJS
    Instalar o yarn /ou/ npm;

Dependências adicionadas:

    Express;
    Pg;
    Sequelize;
    Sequelize-cli;
    Nodemon;
    React;
    Cors;
    Axios;

Para startar o server, executar o script “start”:

    yarn start /ou/ npm start;

Instruções para o banco de dados:

    Utilizando Postgres criar:

        usarname: digivox
        passaword: digivox
        database: library

    Para realizar as migrações das tabelas digite e execute o comando:

      yarn sequelize db:migrate
      ou
      npm sequelize db:migrate
