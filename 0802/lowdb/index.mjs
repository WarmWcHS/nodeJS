
import { Low } from "Lowdb"
import { JSONFile } from "lowdb/node"
import { v4 as uuidv4 } from "uuid"


const defaultData = {
    user: {},
    products: []
}
const db = new Low(new JSONFile("db.json"), defaultData)
await db.read()
// 預設資料寫入指定檔案
// await db.write()
// console.log(db.data);

// db.data.products.push({
//     id:uuidv4(),
//     title:"小黃瓜",
//     price:45,
//     stock:50,
//     createTime:Date.now()
// })
// await db.write()
// console.log(db.data);

// let uuid=uuidv4()
// let user={
//     id:uuid,
//     account:"abross",
//     name:"WWcHS",
//     password:"12345"
// }
// db.data.user[uuid]=user
// await db.write()

// let data=db.data.products.find(p => p.id==="06f15555-5710-41f1-8a50-bf5622cf377d")
// let data=db.data.products.find(p => p.title==="冬瓜")
// let data=db.data.products.filter(p => p.title.includes("瓜"))

// 分頁
// let page = 1
// let limit = 5
// const start = limit * (page - 1)
// const end = limit * page

// let data=db.data.products.slice(start,end)
// let data = db.data.products.sort((a, b) => b.price - a.price).slice(start, end)
// console.log(data);

// 更新
// db.data.products.find(p =>p.title==="冬瓜").price=1000

// await db.write()

// 刪除
db.data.products = db.data.products.filter(p => p.title !== "冬瓜")

await db.write()