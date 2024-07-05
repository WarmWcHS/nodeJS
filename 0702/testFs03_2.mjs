import { appendFileSync } from "fs";

const file1 = "./測試測試2_ESM.txt"
const content1 = "\r\n\r\n鞭數十，驅之別院。"

try{
    appendFileSync(file1,content1)
    console.log("1 寫入成功");
}catch(error){
    console.log("2 寫入失敗");
}

