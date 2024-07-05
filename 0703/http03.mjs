import http from "http"

const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html;charset=utf-8");

    let body = "";
    request.on("data", chunk => {
        body += chunk;
    });
    request.on("end", () => {
        console.log(body);
        response.end("小姐你好，不是推銷");
    });
})

server.listen(9000, () => {
    console.log("link start,http://localhost:9000");
})