import { readFileSync } from "fs"
let data;

try {
    data = readFileSync("./測試連續寫入.txt")
    console.log("讀取成功");
} catch (error) {
    console.log("讀取失敗");
}
console.log(data.toString());
