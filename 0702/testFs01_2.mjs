import fs from "fs";

const file1 = "./測試測試_ESM2.txt"
const content1 = "床前明月光，疑似地上霜"

fs.writeFile(file1,content1,function(error){
    if(error){
        console.log("失敗");
    }
    console.log("成功");
});