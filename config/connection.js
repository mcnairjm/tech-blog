const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DP_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001,
    }
);

module.exports = sequelize;