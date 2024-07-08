import express from "express";
import connect from "./db.mjs";

const app = express()

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/d/:id", (req, res) => {
    const id = req.params.id;
    connect.execute(
        "SELECT * FROM `sort` WHERE `id` = ?",
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            const newRe = result.map(item => {
                return { listNum: item.id, lisetName: item.name }
            })
            res.json({re:newRe});
        }
    );
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})