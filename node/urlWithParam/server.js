const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    // without url module, just property of request
    // console.log(request.url)
    // with url module, in order to parse what's been typed
    console.log(url.parse(request.url))
    response.end('Bonjour')
})
server.listen(8080)