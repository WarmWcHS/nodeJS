import express from "express";
import multer from "multer";
import moment from "moment";
import cors from "cors"
import jwt from "jsonwebtoken"
import users from "./user.mjs";

const upload = multer()
const jwtKey = process.argv[2]
// 設定
const whitelist = ['http://localhost:5500', 'http://localhost:3000'];
const corsOptions = {
    credentials: true,
    origin(origin, callback) {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('不允許傳遞資料'));
        }
    },
};
const app = express();
app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// 接路由規則
app.get("/", (req, res) => {
    res.send("首頁")
})

app.post("/api/user/login", upload.none(), (req, res) => {
    const { account, password } = req.body
    // console.log(account,password);
    const user = users.find(u => u.password === password && u.account === account)
    if (user) {
        const token = jwt.sign({
            account: user.account,
            name: user.name,
            mail: user.mail,
            head: user.head
        }, jwtKey, {
            expiresIn: "30m"
        })
        res.status(200).json({ status: "success", token })
    } else {
        res.status(400).json({
            status: "NOT FOUND",
            message: "使用者帳號或密碼錯誤"
        })
    }
})

app.get("/api/user/logout", checkToken, (req, res) => {
    const { account, name, mail, head } = req.decoded
    if (account) {
        const token = jwt.sign({
            account,
            name,
            mail,
            head
        }, jwtKey, {
            expiresIn: "-1s"
        })
        res.status(200).json({ status: "success", token })
    } else {
        res.status(400).json({
            status: "error",
            message: "登出失敗，請稍後再試"
        })
    }
})

app.get("/api/user/status", checkToken, (req, res) => {
    const { account, name, mail, head } = req.decoded
    if (account) {
        const token = jwt.sign({
            account,
            name,
            mail,
            head
        }, jwtKey, {
            expiresIn: "30m"
        })
        res.status(200).json({ status: "success", token })
    } else {
        res.status(400).json({
            status: "error",
            message: "驗證錯誤，請重新登入"
        })
    }
})


app.listen(3000, () => {
    console.log("server is running:http://localhost:3000/");
})

function checkToken(req, res, next) {
    let token = req.get("Authorization")
    // indexOf可用startwith方法替換
    if (token && token.indexOf("Bearer ") === 0) {
        token = token.slice(7)
        jwt.verify(token, jwtKey, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    status: "Error",
                    message: "登入驗證失敗，請重新登入"
                })
                return
            }
            req.decoded = decoded
            next()
        })
    } else {
        res.status(401).json({
            status: "Error",
            message: "無驗證資料，請重新登入"
        })
    }
}