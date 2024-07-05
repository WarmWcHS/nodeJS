import http from "http";


const server = http.createServer((request, response) => {
    let url = new URL(request.url,"http://localhost");
    console.log(url.searchParams.get("name"));
    console.log(url.searchParams.get("pwd"));
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("小姐你好，不是推銷");
})

server.listen(9000, () => {
    console.log("link start,http://localhost:9000");
})