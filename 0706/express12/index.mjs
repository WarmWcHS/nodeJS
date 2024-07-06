import express from "express";
import frontRouter from "./routes/front.mjs";
import backRouter from "./routes/back.mjs";
import userRouter from "./routes/user.mjs";

const app = express()

app.use(frontRouter);
app.use(backRouter);
app.use("/user", userRouter);

app.all("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, () => {
    console.log(`服務已啟動於 http://localhost:3000`);
})