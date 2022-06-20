const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    response.end('Hello ! Everything\'s fine ?')
})

server.listen(8080)