import mysql from "mysql2/promise"

const db =await mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "12345",
    database: "nodejs",
    waitForConnections: true,
    connectionLimit: 3,
    queueLimit: 0,
})

// const [results,fields] =await db.execute("SELECT * from `sort2`").catch(err => {
//     console.log(err.message);
//     return [[],[]]
// })
// console.log(results);
// console.log(fields);

export default db
// db.execute(
//     "SELECT * from `sort`",
//     (err,results,fields) => {
//         console.log(err);
//         console.log(results);
//         console.log(fields);
//     }
// )