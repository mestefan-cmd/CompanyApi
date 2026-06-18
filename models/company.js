const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: { isEmail: true },
    },
    address: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'companies',
    timestamps: true,
    underscored: true,
    updatedAt: false
});

module.exports = Company;
