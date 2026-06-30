const { Op } = require('sequelize');
const sequelize = require('./db');
const { Company, Employee, Category } = require('./models');
const User = require('./models/user');

module.exports = { Op, sequelize, Company, Employee, Category, User };
