import jwt from "jsonwebtoken"
// import dotenv from 'dotenv'
// dotenv.config()
// const jwtKey ='WWcHS'
// const jwtKey = process.argv[2]
const jwtKey=process.env.JWT_KEY

const token=jwt.sign({
    account:"Abross",
    password:"12345"
},jwtKey)

console.log(token);