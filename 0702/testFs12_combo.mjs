import { mkdirSync, readdirSync,writeFileSync } from "fs";


try {
    mkdirSync("./WWcHS")
    writeFileSync("./WWcHS/aaa.text","朋友bang不見")
    const files =readdirSync("./WWcHS")
    console.log(files);
} catch (error) {
    console.log(error);
}


