import { stat, readdir } from "fs/promises";
import { join } from "path";

// const stats = await stat("./video").catch(error => console.log(error));
// console.log(stats);
// console.log(stats.isFile());
// console.log(stats.isDirectory());

const file = await readdir("./");
console.log(file);
file.forEach(async name => {
    // const path = join(name)
    const stats = await stat(name).catch(error => console.log(error));
    if(stats.isFile()) console.log(`${name}是檔案`);
    if(stats.isDirectory()) console.log(`${name}是資料夾`);
})