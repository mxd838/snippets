const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    // without url module, just property of request
    // console.log(request.url)
    // with url module, in order to parse what's been typed
    let query = url.parse(request.url, true).query
    if (query.name === undefined){
        response.write('Bonjour anonyme')
    } else {
        response.write('Bonjour ' + query.name)
    }
    response.end()
})
server.listen(8080)