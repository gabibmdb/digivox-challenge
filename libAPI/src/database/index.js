const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const conn = new Sequelize(dbConfig);

const User = require('../models/User')
const Book = require('../models/Book')
const Loan = require('../models/Loan')

User.init(conn);
Book.init(conn);
Loan.init(conn);

User.associate(conn.models);
Loan.associate(conn.models);

module.exports = conn;