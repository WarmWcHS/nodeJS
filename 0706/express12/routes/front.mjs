import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.send("首頁")
})

router.get("/home",(req,res)=> {
    res.send("主YA")
})

router.get("/search",(req,res)=> {
    res.send("SEARCH")
})

export default router;