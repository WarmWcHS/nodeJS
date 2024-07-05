import http from "http";


const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.setHeader("Abbbbb","Bang")
    response.statusCode = 201;
    // response.statusMessage = "No page";
    response.write("小姐妳好，不是推銷<br>")
    response.write("我在這裡街頭攝影<br>")
    response.end("方便幫你拍張照嗎");
    // response.end("方便幫你拍張照嗎"); //Error [ERR_STREAM_WRITE_AFTER_END]: write after end
})

server.listen(9000, () => {
    console.log("link start,http://localhost:9000");
})