const fs =require("fs");

const file1 = "./測試測試.txt"
const content1 = "床前明月光，疑似地上霜"

fs.writeFile(file1,content1,function(error){
    if(error){
        console.log("寫入失敗");
        return;
    }
    console.log("寫入成功");
})

