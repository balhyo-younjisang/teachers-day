import "./db.js";
import "./models/Letter.js";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import letterRouter from "./routers/letterRouter.js";
import path from "path";
import { renderFile } from "ejs";
import helmet from "helmet";
const __dirname = path.resolve();

const PORT = 3000;
const app = express();

const logger = morgan("dev");

app.use(helmet);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', renderFile);
app.use(express.static("/public"));
app.use("/js", express.static("public/js"));
app.use('/css', express.static("public/css"));
app.use("/imgs", express.static("public/imgs"));

app.use(logger);
app.use("/", letterRouter);

app.listen(PORT, () => {
    console.log(`server is listening at localhost: ${PORT}🚀`);
})

export default app;