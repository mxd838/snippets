const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name
    // add utf8 as to be able to handle data not as raw data (cf buffer)
    fs.readFile('index.html','utf8', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end('Ce fichier n\'existe pas.')
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
        })
        data = data.replace('{{ name }}', name)
        response.end(data)
        }
    })

})
server.listen(8080)