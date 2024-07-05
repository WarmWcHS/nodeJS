import { stat } from "fs/promises";

const stats = await stat("./video").catch(error => console.log(error));
// console.log(stats);
console.log(stats.isFile());
console.log(stats.isDirectory());
