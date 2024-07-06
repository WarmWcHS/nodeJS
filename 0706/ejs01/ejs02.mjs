import ejs from "ejs";
import { resolve } from "path"
import { readFile } from "fs/promises"

const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
const temp = await readFile(resolve(import.meta.dirname, "template02.html"), "utf-8");

const result = ejs.render(temp, { blackpink });

console.log(result);

// let str = "<ul>\r\n"
// blackpink.forEach(name => {
//     str += `<li>${name}</li>\r\n`
// })

// str += "</ul>"

// console.log(str);