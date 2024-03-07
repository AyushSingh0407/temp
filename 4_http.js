const http = require('http')

/*
const server = http.createServer((req, res) => {
    res.write('hello my name is Ayush Singh')
    res.end()
})
*/



const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('hello this is home page')
    }
    else if(req.url === '/history'){
        res.end('History')
    }
    else{
        res.end(`
    <h1>Oops!!</h1>
    <p>Page not found</p>
    <a href="/">Home Page</a>
    `)
    }
})

server.listen(5000)