//importanto o express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//importando a database para o server, aumentaticamente irá buscar o index.js dentro da pasta
require('./database')

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

//checando o servidor
app.listen(5555, function() {
    console.log("Server is running")
});

