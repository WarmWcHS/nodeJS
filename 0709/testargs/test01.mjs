console.log(process.argv);

const isLog =process.argv[2]


let clg = (content) => {
    if(isLog === "true"){
        console.log(content);
    }
}

clg(1+1);