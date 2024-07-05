import { appendFile } from "fs";


const file1 = "./測試測試2_ESM.txt"
const content1 = "\r\n鞭數十，驅之別院。"

appendFile(file1,content1,error => {
    // if(error){
    //     console.log("寫入失敗");
    //     return;
    // }
    if(error) return console.log("寫入失敗") || false;
    console.log("寫入成功");
})

