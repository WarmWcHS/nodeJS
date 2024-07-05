import http from "http";
import { parse } from "url";

const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html;charset=utf-8");

    const resUrl = (parse(request.url, true));
    // console.log(resUrl);
    // console.log(resUrl.pathname);
    if(resUrl.pathname !== "/favicon.ico"){
        console.log(resUrl.query.name);
        console.log(resUrl.query.pwd);
    }
    response.end("小姐你好，不是推銷");
})

server.listen(9000, () => {
    console.log("link start,http://localhost:9000");
})