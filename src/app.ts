import express, { Express, Request, Response } from "express";
import { load } from "ts-dotenv";
import { loadData } from "./services/loadData";

const app: Express = express();

const env = load({
    PORT: Number,
});

app.use("/", (req: Request, res: Response) => {
    loadData();
    res.send("Hello World");
});

app.listen(env.PORT, () => {
    console.log('server is listening on port ' + env.PORT)
});