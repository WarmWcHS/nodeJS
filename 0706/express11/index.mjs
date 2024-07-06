import express from "express";
import { resolve } from "path";
// import bodyParser from "body-parser";

const app = express()

// create application/json parser
const jsonParser = express.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false })

app.use((req, res, next) => {
    if (req.get("referer")) {
        const { hostname } = new URL(req.get("referer"))
        if(hostname != "127.0.0.1"){
            res.status(404).send("<h1>404 NOT FOUND</h1>")
            return;
        }
    }
    
    next();
});

app.use(express.static(resolve(import.meta.dirname, "public")))
app.use("/bootstrap", express.static(resolve(import.meta.dirname, "node_modules/bootstrap/dist")))

app.use("/jquery", express.static(resolve(import.meta.dirname, "node_modules/jquery/dist")))

app.use("/fa", express.static(resolve(import.meta.dirname, "node_modules/@fortawesome/fontawesome-free")))

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/login", (req, res) => {
    res.sendFile(resolve(import.meta.dirname, "public", "form.html"))
})

app.post("/login", urlencodedParser, (req, res) => {
    console.log(req.body);
    // res.send("送拉")
    res.json(req.body)
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})