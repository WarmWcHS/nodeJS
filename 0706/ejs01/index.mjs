import express from "express";
import ejs from "ejs";
import { resolve } from "path"

let user;

const app = express()

app.use("/bs", express.static(resolve(import.meta.dirname, "node_modules/bootstrap/dist")))

app.set("view engine", "ejs")
app.set("views", resolve(import.meta.dirname, "views"))


app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/login", (req, res) => {
    user = {
        name: "Loretta Mendoza",
        img: "https://randomuser.me/api/portraits/women/17.jpg"
    };
    res.redirect("/test3")
})

app.get("/logout", (req, res) => {
    user = undefined
    res.redirect("/test3")
})

app.get("/test", (req, res) => {
    const name = "WarmWcHS";
    const str = "Hello EEEEEJJJJJJSSSS";
    res.render("test", { name, str })
})

app.get("/test2", (req, res) => {
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];

    res.render("test2", { blackpink })
})

app.get("/test3", (req, res) => {

    res.render("test3", { user })
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})