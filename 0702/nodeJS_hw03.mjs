import { readdir,rename } from "fs/promises";

const file = await readdir("./work")

file.forEach(name => {

    for (let n = 1; n < 10; n++) {
        let f_name = `work${n}.html`
        let n_f_name = `work0${n}.html`
        rename(`./work/${f_name}`, `./work/${n_f_name}`)

    }
})