const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('app_database', 'hzoppothunca', 'LiquidDeath95!!', {
    host: 'database1.cf1baddpvqz5.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
});

module.exports = sequelize;
