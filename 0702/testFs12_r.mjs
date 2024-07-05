import { mkdir, readdir } from "fs";

const argv = process.argv.slice(2)


// mkdir("./html", error => {
//     if (error) {
//         console.log("資料夾建立失敗");
//         console.log(error);
//         return;
//     }
//     console.log("建立資料夾成功")
// })
readdir("./", (error, file) => {
    if(error){
        console.log("建立資料夾失敗");
        return;
    }
    console.log("讀取資料夾成功");
    console.log(file);
})
