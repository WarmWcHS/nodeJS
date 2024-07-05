import express from "express";

const app = express()

const adminCheck = (req, res, next) => {
    if (req.query.code === "464") {
        next()
    } else {
        res.send("需要權限");
    }
}

app.get("/", (req, res) => {
    res.send("首頁");
})

app.get("/home", (req, res) => {
    res.send("主YA");
})

app.get("/admin",adminCheck, (req, res) => {
    res.send("管理");
})

app.get("/settings",adminCheck, (req, res) => {
    res.send("設定");
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})