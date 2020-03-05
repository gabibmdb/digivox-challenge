//Este arquivo será importado dentro do index.js da pasta database
//É preciso importar os DataTypes do sequelize
const { Model, DataTypes } = require('sequelize');

//Chamando a classe Model como método init
//Não é necessário informar o id nem as Timestamps
class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
        sequelize 
        })
    }

    static associate(models) {
        this.hasMany(models.Loan, { foreignKey: 'user_id', as: 'loans' });
    }
}

module.exports = User;
