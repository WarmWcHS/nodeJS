import express from "express";
import { resolve } from "path";
// import data from "./singer.json" assert {type: "json"}
// const { singers } = data;
import singers from "./singer.js"
console.log(singers);
const app = express()

app.get("/", (req, res) => {
    res.status(400);
    res.set("HHHHH", "???????") //res.setHeader
    res.send("首頁")
})

app.get("/login", (req, res) => {
    res.status(404).set("bbb", "xxxxxx").send("loginnnnnnnn")
})

app.get("/netflix", (req, res) => {
    res.redirect("https://www.netflix.com/")
})

app.get("/singer", (req, res) => {
    res.download(resolve(import.meta.dirname, "singer.json"))
})

app.get("/singers", (req, res) => {
    res.json(singers);
})

app.get("/file", (req, res) => {
    res.sendFile(resolve(import.meta.dirname, "singer.html"))
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})