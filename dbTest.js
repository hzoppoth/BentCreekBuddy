const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('app_database', 'hzoppothunca', 'LiquidDeath95!!', {
  host: 'database1.cf1baddpvqz5.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  })
  .finally(() => {
    sequelize.close(); //close connection
  });
