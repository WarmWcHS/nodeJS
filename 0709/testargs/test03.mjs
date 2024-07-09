import mysql from "mysql2/promise"


const db =await mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB,
    waitForConnections: true,
    connectionLimit: 3,
    queueLimit: 0,
})

const [results,fields] =await db.execute("SELECT * from `sort`").catch(err => {
    console.log(err.message);
    return [[],[]]
})
console.log(results);
console.log(fields);
