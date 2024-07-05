import { writeFileSync } from "fs";

const file1 = "./測試測試2_ESM.txt"
const content1 = "有朋自遠方來"


console.log("1 寫入開始");
try{
    writeFileSync(file1,content1)
}catch(error){
    console.log("2 寫入失敗");
}

console.log("3 寫入成功");