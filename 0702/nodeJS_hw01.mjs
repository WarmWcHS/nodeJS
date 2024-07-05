import { writeFile } from "fs";

// let n = 0;


for (let n = 1; n < 21;n++) {
    const file1 = `./work${n}.html`
    const content1 = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <h1>這是第 ${n} 個 HTML 檔</h1>
    </body>
    </html>`
    writeFile(file1, content1, error => {
        if (error) {
            console.log(error);
        }

    })
}
