import express from "express";
import moment from "moment";
import { appendFile } from "fs";
import { resolve } from "path";
// console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

const app = express();

const accessLog = (req, res, next) => {
    const { url, ip } = req;
    const datetime = moment().format("YYYY-MM-DD HH:mm:ss");
    appendFile(resolve(import.meta.dirname, "access.log"), `${datetime} ${url} ${ip}\r\n`, err => true);
    next();
}

const errorLog = (req, res, next) => {
    const { url, ip } = req;
    const datetime = moment().format("YYYY-MM-DD HH:mm:ss");
    appendFile(resolve(import.meta.dirname, "error.log"), `${datetime} ${url} ${ip} 404 error \r\n`, err => true);
    next();
}

app.use(accessLog)

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/home", (req, res) => {
    res.send("主YA")
})

app.get("/login", (req, res) => {
    res.send("登入")
})

app.get("/reg", (req, res) => {
    res.send("註冊")
})

app.all("*", errorLog, (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})