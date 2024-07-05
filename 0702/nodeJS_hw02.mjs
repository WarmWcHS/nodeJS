import { mkdirSync,rename } from "fs";

try{
    mkdirSync("./work")
}catch(error){
    if(error){
        console.log("建立資料夾失敗");
        console.log(error);
    }
}

for (let n = 1; n < 21;n++) {
    rename(`./work${n}.html`,`./work/work${n}.html`,error =>{
        if(error){
            console.log("搬移檔案失敗");
        }
    })
}