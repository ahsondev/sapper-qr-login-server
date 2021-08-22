const http = require('http')
const express = require('express')

var cors = require('cors')
var app = express()
app.use(cors())

const server = http.createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', () => {
  /* … */
})

server.listen(3003)
