const { Model, DataTypes } = require('sequelize');

class Loan extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            book_id: DataTypes.INTEGER,
        },
        {
        sequelize 
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
};


module.exports = Loan;