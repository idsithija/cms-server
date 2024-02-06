import express from "express";
import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes";
import sequelize from "./database/sequelize";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errorHandlers/not-found-error";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use(routes);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
