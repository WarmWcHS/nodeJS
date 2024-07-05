import http from "http";

const server = http.createServer((request,response) => {
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);
    response.setHeader("content-type","text/html;charset=utf-8")
    response.end("尼豪，J4伺ㄈㄑ")
});

server.listen(9000, () => {
    console.log("Link Start!http://localhost:9000");
})