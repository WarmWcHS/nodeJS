import express from "express";

const router = express.Router();

router.get("/admin",(req,res)=> {
    res.send("管理")
})

router.get("/setting",(req,res)=> {
    res.send("設定")
})

export default router;