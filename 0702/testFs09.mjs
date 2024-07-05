import { createReadStream, createWriteStream } from "fs";

const rs = createReadStream("./video/movie.mp4")
// const ws = createWriteStream("./video/movie3.mp4")



if (process.argv[2]) {
    const ws = createWriteStream("./video/movie3.mp4")
    let n = 0
    rs.on("data", chunk => {
        n++;
        ws.write(chunk);
        console.log(`寫入過程${n}`);
    })
    rs.on("end", e => {
        ws.end();
        console.log("寫入完成");
    })
    
    console.log(process.argv);
} else {
    const ws = createWriteStream("./video/movie4.mp4")
    console.log("執行 pipe");
    rs.pipe(ws)
}