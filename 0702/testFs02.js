const fs =require("fs")

const file1 = "./測試測試2.txt"
const content1 = "床前明月光，疑似地上霜"

console.log("1 寫入開始");
fs.writeFileSync(file1,content1);
console.log("2 寫入成功");