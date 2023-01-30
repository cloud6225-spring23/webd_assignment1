import express from "express";
import bodyparser from "body-parser";
import { userRouter } from "./route/userRoute.js";

const app = express();

app.use(bodyparser.json());

app.use(userRouter);

export { app };