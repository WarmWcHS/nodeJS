import mysql from "mysql2/promise"

const connect = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "12345",
    database: "nodejs"
});

// const [results] = await connect.query("SELECT * FROM `sort2`").catch(err => {
//     console.log(err);
//     return [[]]
// })
// console.log(results);

export default connect