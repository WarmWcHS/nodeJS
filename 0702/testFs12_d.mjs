import { rmdir, mkdir, rm } from "fs";

const argv = process.argv.slice(2)

if (argv[0]) {
    mkdir("./html", error => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("建立成功");
    })
} else {
    rm("./WcHS", { recursive: true }, error => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("刪除成功");
    })
}


