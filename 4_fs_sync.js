const fs = require('fs');

const first = fs.readFileSync('./content/first.txt','utf8')
console.log(first)
console.log(fs.readFileSync('./content/second.txt','utf8'))


const {writeFileSync} = require('fs');

writeFileSync(
    './content/first.txt','ayush',{flag : 'a'}
    ) 