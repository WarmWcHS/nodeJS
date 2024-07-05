import { createWriteStream } from "fs";

const ws = createWriteStream("./測試連續寫入.txt")
ws.on("finish", () => {
    console.log("寫完ㄌ");
})

ws.write("有朋自遠方來，\r\n")
console.log("寫入1");
ws.write("必先苦其心志，勞其筋骨，\r\n")
console.log("寫入2");
ws.write("餓其體膚，空乏其身，行拂亂其所為，\r\n")
console.log("寫入3");
ws.write("後鞭數十，驅之別院。\r\n")
console.log("寫入4");
ws.end()