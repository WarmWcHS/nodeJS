import express from "express";
import {resolve} from "path"

const app = express()

app.use(express.static(resolve(import.meta.dirname,"public")))

app.get("/", (req, res) => {
    res.send("首頁")
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})