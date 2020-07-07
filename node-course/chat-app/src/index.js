const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;

// server (emit) -> client (receive) - countUpdated
// client (emit) -> server (receive) - increment

io.on('connection', (socket) => {
  console.log(`New WebSocket connection`);

  socket.emit('message', 'Welcome!');

  socket.on('send', (message) => {
    console.log(message);
    io.emit('send', message)
  });


  // socket.emit('countUpdated', count);

  // socket.on('increment', () => {
  //   count++;
  // socket.emit('countUpdated', count);
  //   io.emit('countUpdated', count);
  // });
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
