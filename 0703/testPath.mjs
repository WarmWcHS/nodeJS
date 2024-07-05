import { join, resolve, sep, parse, basename,dirname,extname } from "path";
import { fileURLToPath } from "url";

// console.log(sep);
// console.log(join("a","b","c"));
// console.log(resolve("a","b","c"));
// console.log(join(import.meta.dirname,"a","b","c"));
// console.log(resolve(import.meta.dirname,"a","b","c"));
// console.log(import.meta.filename);
// console.log(import.meta.url);
// console.log(parse(import.meta.filename));
// console.log(parse(fileURLToPath(import.meta.url)));
console.log(basename("a/b/c/ddd.txt"));
console.log(dirname("a/b/c/ddd.txt"));
console.log(extname("a/b/c/ddd.txt"));