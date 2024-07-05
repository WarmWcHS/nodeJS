import { mkdir } from "fs";

const argv = process.argv.slice(2)

if (argv[0]) {
    mkdir("./html", error => {
        if (error) {
            console.log("資料夾建立失敗");
            console.log(error);
            return;
        }
        console.log("建立資料夾成功")
    })
} else {
    mkdir("./a/b/c",{recursive: true}, error => {
        if (error) {
            console.log("資料夾建立失敗");
            console.log(error);
            return;
        }
        console.log("建立資料夾成功")
    })
}


