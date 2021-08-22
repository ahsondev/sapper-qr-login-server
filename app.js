
const server = require('http').createServer();
const io = require('socket.io')(server);
const express = require('express');

var cors = require('cors');

var app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

io.on('connection', client => {
  client.on('event', data => { 
    console.log("HEllo");
    return data; 
  });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3003);