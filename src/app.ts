import express from "express";
import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieSession from "cookie-session";

import routes from "./routes";
import sequelize from "./database/sequelize";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errorHandlers";
import path from "path";

const app = express();

// app.set('trust proxy', true);
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // secure: process.env.NODE_ENV !== "test",
  })
);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//     return sequelize.sync();
//   })
//   .then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database: ", error);
//   });

// app.use(routes);

// Serve static files from the React build directory
app.use(express.static(path.resolve(__dirname, '../views/dist')));

// For any other route, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/dist', 'index.html'));
});

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
