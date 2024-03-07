const {readFile, writeFile} = require('fs');

console.log("start")
readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/name.txt', `My name is ${first} ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Successfully written");
        })
    })
})

console.log("next task")