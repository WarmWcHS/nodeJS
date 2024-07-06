import ejs from "ejs"
import {readFile} from "fs/promises"
import { resolve } from "path";
let user;

user = {
    name: "Loretta Mendoza",
    img: "https://randomuser.me/api/portraits/women/17.jpg"
};

const temp = await readFile(resolve(import.meta.dirname,"template03.html"),"utf-8")
const result = ejs.render(temp, { user })


console.log(result);

// if (user) {
//     console.log(`<img src = ${user.img}> <span>${user.name}</span> <button>登出</button>`);
// } else {
//     console.log(`<button>登入</button> <button>註冊</button>`);
// }