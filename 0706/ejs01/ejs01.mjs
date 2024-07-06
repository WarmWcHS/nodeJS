import ejs from "ejs";
import { readFile } from "fs/promises";
import { resolve } from "path";

const name = "WarmWcHS";
const str = "Hello EEEEEJJJJJJSSSS";

// console.log(`${str} ${name}`);
// const temp = "<%=str%> <%=name%>"
const temp = await readFile(resolve(import.meta.dirname,"template01.html"),"utf-8")
const result = ejs.render(temp, { str, name })
console.log(result);