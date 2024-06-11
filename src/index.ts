import express, { Application } from "express";
import { routes } from "./routes";

const app: Application = express();
const port: Number = 3000;

routes(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
