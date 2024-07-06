import express from "express";
const router =express.Router();

router.get("/",(req,res)=> {
    res.send("user in")
})

router.get("/search",(req,res)=> {
    res.send(`search PAGE`)
})

router.get("/:id",(req,res)=> {
    res.send(`user ${req.params.id} PAGE`)
})

export default router;