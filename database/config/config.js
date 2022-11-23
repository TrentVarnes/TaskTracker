import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_task', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

sequelize.sync();
module.exports = sequelize;