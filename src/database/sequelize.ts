import { Dialect, Sequelize } from "sequelize";
require("dotenv").config();

// Ensure you have the correct environment variable names
const databaseName = 'cms';
const username = 'cms';
const password = '123';
const host = "localhost";

const sequelize = new Sequelize(databaseName, username, password, {
  host: host,
  dialect: "mysql",
  port : 3306
});

export default sequelize;