import { writeFile } from "fs";

const file1 = "./測試測試_ESM.txt"
const content1 = "床前明月光，疑似地上霜"

writeFile(file1,content1,function(error){
    if(error){
        console.log("1 失敗");
    }
    console.log("2 成功");
});
console.log("3 測試");