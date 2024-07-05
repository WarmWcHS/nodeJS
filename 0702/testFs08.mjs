import { readFileSync,writeFileSync } from "fs"

const data = readFileSync("./video/movie.mp4")
writeFileSync("./video/movie2.mp4",data)
