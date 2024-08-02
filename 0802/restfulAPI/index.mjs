import express from "express"
import multer from "multer"
import moment from "moment"
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"
import cors from "cors"
import { Low } from "lowdb"
import { JSONFile } from "lowdb/node"

const jwtKey = process.argv[2]
const mode = process.argv[3]
const blackList = []


const defaultData = { user: [], products: [] }
const db = new Low(new JSONFile("db.json"), defaultData)
await db.read()

const upload = multer()
// 設定部份
let whitelist = ["http://localhost:5500", "http://localhost:3000"];
let corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
const app = express();
app.use(cors(corsOptions));
// 續路由部份

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/api/users/", (req, res) => {
    let users = db.data.user.map(u => {
        const { password, ...others } = u
        return others
    })
    if (!users) {
        return res.status(404).json({
            status: "fail",
            message: "找不到使用者",
        })
    }
    res.status(200).json({
        status: "success",
        message: "使用者列表",
        users
    })
})

app.get("/api/users/search/", (req, res) => {
    const id = req.query.id
    let result = db.data.user.filter(u => u.account.includes(id))
    if (!result) {
        res.status(404).json({
            status: "fail",
            message: "找不到使用者"
        })
        return
    }
    res.status(200).json({
        status: "success",
        message: "找到使用者",
        users: result
    })
})

app.post("/api/users/login", upload.none(), (req, res) => {
    const { account, password } = req.body
    let user;
    // if(mode==="dev"){
    //     user = db.data.user.find(u => u.account === account && u.password === password)
    // }else{
    //     接SQL處理
    //     user=await ...
    // }
    user = db.data.user.find(u => u.account === account && u.password === password)
    if (!user) {
        res.status(400).json({
            status: "fail",
            message: "使用者帳號或密碼錯誤"
        })
        return
    }
    const token = jwt.sign({
        account: user.account,
        name: user.name,
        mail: user.mail,
        head: user.head
    }, jwtKey, {
        expiresIn: "30m"
    })
    res.status(200).json({ status: "success", token })

})

app.get("/api/users/logout", (req, res, next) => {
    if (mode === "dev") {
        next()
    } else {
        checkToken(req, res, next)
    }
}, (req, res) => {
    if (mode === "dev") {
        res.status(200).send("使用者登出")
        return
    }
    let token2 = req.get("Authorization")
    token2 = token2.slice(7)
    const { account, name, mail, head } = req.decoded
    if (!account) {
        res.status(400).json({
            status: "fail",
            message: "登出失敗，請稍後再試"
        })
        return
    }
    const token = jwt.sign({
        account,
        name,
        mail,
        head
    }, jwtKey, {
        expiresIn: "-1s"
    })
    blackList.push(token2)
    res.status(200).json({ status: "success", message: "登出成功", token })
})

app.get("/api/users/status", (req, res, next) => {
    if (mode === "dev") {
        next()
    } else {
        checkToken(req, res, next)
    }
}, (req, res) => {
    if (mode === "dev") {
        res.status(200).send("檢查使用者登入狀態")
        return
    }
    const { account, name, mail, head } = req.decoded
    if (!account) {
        res.status(400).json({
            status: "error",
            message: "驗證錯誤，請重新登入"
        })
        return
    }
    const token = jwt.sign({
        account,
        name,
        mail,
        head
    }, jwtKey, {
        expiresIn: "30m"
    })
    res.status(200).json({ status: "success", message: "使用者在登入狀態", token })
})

app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    let user = db.data.user.find(u => u.id === id)
    if (!user) {
        res.status(404).json({
            status: "fail",
            message: "找不到使用者",
        })
        return
    }
    res.status(200).json({
        status: "success",
        message: "找到使用者",
        user

    })
})

app.post("/api/users/", upload.none(), async (req, res) => {
    const { account, password, name, mail, head } = req.body
    let id = uuidv4()
    db.data.user.push({
        id, account, password, name, mail, head
    })
    await db.write()
    res.status(201).json({
        status: "success",
        message: "新增使用者成功",
        id
    })
})

app.put("/api/users/:id", upload.none(), async (req, res) => {
    const id = req.params.id
    const { account, password, name, mail, head } = req.body
    let user = db.data.user.find(u => u.id === id)
    if (!user) {
        return res.status(404).json({
            status: "fail",
            message: "修改失敗",
        })
    }
    // let newData={ account, password, name, mail, head }
    // user={...user,...newData}
    Object.assign(user, { account, password, name, mail, head })
    await db.write()
    res.status(200).json({
        status: "success",
        message: "更新使用者資料成功",
        user
    })
})

app.delete("/api/users/:id", async(req, res) => {
    const id = req.params.id
    let user = db.data.user.find(u => u.id === id)
    if (!user) {
        return res.status(404).json({
            status: "fail",
            message: "找不到使用者",
        })
    }
    db.data.user=db.data.user.filter(u =>u.id!==id)
    await db.write()
    res.status(200).json({
        status: "success",
        message: "刪除成功",
    })
})



app.listen(3000, () => {
    console.log("http://localhost:3000");
})


function checkToken(req, res, next) {
    let token = req.get("Authorization")
    // indexOf可用startwith方法替換
    if (token && token.indexOf("Bearer ") === 0) {
        token = token.slice(7)
        // 類似session的做法
        // 不是很保險 因為伺服器重啟就會消失
        // if(blackList.includes(token)){
        //     return res.status(401).json({
        //         status: "Error",
        //         message: "登入驗證失敗，請重新登入"
        //     })
        // }
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