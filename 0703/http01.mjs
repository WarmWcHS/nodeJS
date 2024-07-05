import http from "http";


const server = http.createServer((request, response) => {
    response.setHeader("content-type","text/html;charset=utf-8")
    response.end("Hiiiiiiii server,尼豪");

})

server.listen(9000, () => {
    console.log("Link Start,http://localhost:9000");
})