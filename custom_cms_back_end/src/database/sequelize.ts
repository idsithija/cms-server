import { Dialect, Sequelize } from "sequelize";

// Ensure you have the correct environment variable names
const dialect = process.env.DB_DIALECT! as Dialect;
const databaseName = process.env.DB_DATABASE_NAME!;
const username = process.env.DB_USERNAME!;
const password = process.env.DB_PASSWORD!;
const host = process.env.DB_HOST!;

const sequelize = new Sequelize(databaseName, username, password, {
  host: host,
  dialect: dialect,
});

export default sequelize;
