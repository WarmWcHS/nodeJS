import http from "http";


const server = http.createServer((request, response) => {
    let {method,url} = request;
    let { pathname } = new URL(url, "http://localhost");
    response.setHeader("content-type", "text/html;charset=utf-8");
    if(method === "GET" && pathname === "/login"){
        response.end("我在這裡街頭攝影");
    }else if(method === "GET" && pathname === "/reg"){
        response.end("我覺得你很有氣質");
    }else{
        response.end("方便幫你拍張照嗎");
    }
})

server.listen(9000, () => {
    console.log("link start,http://localhost:9000");
})