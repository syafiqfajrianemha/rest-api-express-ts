import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: Number = 3000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
