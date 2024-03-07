const os = require('os');
const path = require('path')

console.log(`${os.type()}`) // '()' here this is optional

const type = os.type();
console.log(type)


const system = {
    type : os.type(),
    name : os.hostname(),
    memory : os.totalmem(),
    free_memory : os.freemem(),
}
console.log(system)

console.log(`${path.resolve(__dirname, 'content', 'sub', 'test.txt')}`)