import express, { Application } from "express";
import { routes } from "./routes";
import { logger } from "./utils/logger";
import cors from "cors";

const app: Application = express();
const port: Number = 3000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
