import express from "express";
import cors from "cors"
import multer from "multer";
import session from "express-session";

const users = {
    WarmWcHS: {
        pwd: "12345",
        name: "WarmWcHS"
    },
    tako: {
        pwd: "12345",
        name: "tako tanaka"
    }
}

const upload = multer()
const whiteList = ["http://localhost:5500", "http://localhost:3000"] //或加上 undefined
const corsOption = {
    credentials: true,
    origin(origin, cb) {
        console.log({ origin });
        // if(whiteList.indexOf(origin)!=-1)
        if (!origin || whiteList.includes(origin)) {
            cb(null, true)
        } else {
            cb(new Error("不允許傳遞資料"))
        }
    }
}

const app = express()
app.use(cors(corsOption))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1200000
    }
}))

app.get("/", (req, res) => {
    res.send("首頁")
})

app.post("/", upload.none(), (req, res) => {
    const { userID, userPWD } = req.body
    if (users[userID] && users[userID].pwd === userPWD) {
        const user = users[userID]
        user.id = userID
        const { pwd, ...others } = user
        req.session.user = others
        res.json({ message: "ㄏ一ㄍㄌ", user: others })
    } else {
        res.json({ message: "幹你老師奈德利" })
    }
})

app.get("/checklogin", (req, res) => {
    console.log(req.session.user);
    const { user } = req.session
    res.json({ message: "安,", user })
})

app.get("/logout", (req, res) => {
    
    delete req.session.user
    res.json({message : "bye"})
})

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})