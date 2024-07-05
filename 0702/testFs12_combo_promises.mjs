import { mkdir, writeFile, readdir } from "fs/promises";

try {
    await mkdir("./WcHS");
    await writeFile("./WcHs/bbb.txt","我開心也bang，不開心也bang");
    const file = await readdir("./WcHS")
    console.log(file);

} catch (error) {
    console.log(error);
}



