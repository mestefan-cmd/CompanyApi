const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
    underscored: true,
    updatedAt: false,
    defaultScope: {
        attributes: { exclude: ['password', 'deletedAt', 'deleted_at'] }
    },
    scopes: {
        withPassword: { attributes: {} }
    }
});

module.exports = User;
