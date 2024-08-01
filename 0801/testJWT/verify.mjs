import jwt from "jsonwebtoken"
// import dotenv from 'dotenv'
// dotenv.config()
// const jwtKey ='WWcHS'
// const jwtKey = process.argv[2]
const jwtKey=process.env.JWT_KEY


let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiQWJyb3NzIiwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTcyMjQ3NjgwNn0.j7c7-5iUk8P-G5j0rGHEx6UyzbxQum1dDp1f1yIbtRg"

jwt.verify(token,jwtKey,(err,data)=>{
    if(err){
        console.log("驗證失敗");
        return
    }
    console.log("驗證成功");
    console.log(data);
})