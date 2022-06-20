const http = require('http')
const fs = require('fs')
const url = require('url')
const EventEmitter = require('events')

const App = {
    start: function (port) {
        const emitter = new EventEmitter()
        const server = http.createServer((request, response) => {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            if (request.url === '/'){
                emitter.emit('root', response)
            }
            response.end()
        }).listen(port)
        return emitter
    }
}
const app = App.start(8080)
app.on('root', function (response){
    response.write("Je suis  à la racine.")
})