const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const expenseData = sequelize.define('expensedata',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    desc:{
        type:Sequelize.STRING,
        allowNull: false
    },
    cat:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

module.exports = expenseData

