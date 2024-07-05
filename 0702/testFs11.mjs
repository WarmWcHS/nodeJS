import { unlink, rm } from "fs";

const argv = process.argv.slice(2)


if (argv[0]) {
    rm("./測試測試2.txt", error => {
        if (error) return console.log("刪除失敗") || false;
        console.log("刪除成功")
    })
} else {
    unlink("./測試測試.txt", error => {
        if (error) {
            console.log("刪除失敗");
            console.log(error);
            return;
        }
        console.log("刪除成功");
    })
}