var express = require('express');
var app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a new client connected');
  socket.emit('chat', "message from server");
});

server.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port: ' + app.get('port')); }
});