import express from "express";
import ejs from "ejs";
import { resolve, extname } from "path"
import { rename } from "fs/promises";
import multer from "multer";

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,)
    },
    filename: function(){}
})

const upload = multer({ dest: resolve(import.meta.dirname, "public") })

const app = express()

// const urlencode = express.urlencoded({ extended: false })


app.use("/bs", express.static(resolve(import.meta.dirname, "node_modules/bootstrap/dist")))

app.set("view engine", "ejs")
app.set("views", resolve(import.meta.dirname, "views"))


app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/form1", (req, res) => {
    res.render("form1")
})

app.post("/upload1", upload.single("file"), async (req, res) => {
    let time = Date.now()
    let extname1 = extname(req.file.originalname).toLowerCase()
    let newF_name = `${time}${extname1}`
    await rename(req.file.path, resolve(import.meta.dirname, "public/uploads", newF_name))
    const { body, file } = req
    body.myfile = newF_name
    res.json({ body, file });
})

app.get("/form2", (req, res) => {
    res.render("form2")
})

app.post("/upload2", upload.array("file"), async (req, res) => {
    const { body, files } = req
    let myfiles =[]
    let time = Date.now()
    files.forEach((file, index) => {
        time += index
        let extname1 = extname(file.originalname).toLowerCase()
        let newF_name = `${time}${extname1}`
        myfiles.push(newF_name)
        rename(file.path, resolve(import.meta.dirname, "public/uploads", newF_name))
    })
    body.myfiles =myfiles
    res.json({ body, files })
})

app.get("/form3", (req, res) => {
    res.render("form3")
})

app.post("/upload3", upload.array("file[]"), async (req, res) => {
    const { body, files } = req
    let myfiles =[]
    let time = Date.now()
    files.forEach((file, index) => {
        time += index
        let extname1 = extname(file.originalname).toLowerCase()
        let newF_name = `${time}${extname1}`
        myfiles.push(newF_name)
        rename(file.path, resolve(import.meta.dirname, "public/uploads", newF_name))
    })
    body.myfiles =myfiles
    res.json({ body, files })
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})