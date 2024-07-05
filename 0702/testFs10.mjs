import { rename,renameSync } from "fs"; 

if(process.argv[2]){
    try{
        renameSync("./aaa/種子種子.txt","./測試連續寫入.txt")
        console.log("操作成功");
    }catch(err){
        console.log("操作失敗");
    }
}else{
    rename("./測試連續寫入.txt","./aaa/種子種子.txt",error => {
        if(error) return console.log("操作失敗") ||false;
        console.log("操作成功");
    })
}