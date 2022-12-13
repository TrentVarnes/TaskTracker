/**
 * Connects to my local database using my login credentials
 */
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.sync();
module.exports = sequelize;
