const { Op } = require('sequelize');
const sequelize = require('./db');
const { Company, Employee } = require('./models');

module.exports = { Op, sequelize, Company, Employee };
