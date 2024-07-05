import { readFile } from "fs"

readFile("./測試連續寫入.txt", (error, data) => {
    if(error){
        console.log("讀取失敗");
        return;
    }
    console.log(data.toString());
})