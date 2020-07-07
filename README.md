# Node

## Real-Time Web Applications with Socket.io

### Socket.io on the server 
```js
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;

let count = 0;

// server (emit) -> client (receive) - countUpdated
// client (emit) -> server (receive) - increment

io.on('connection', (socket) => {
  console.log(`New WebSocket connection`);

  socket.emit('countUpdated', count);

  socket.on('increment', () => {
    count++;
    // socket.emit('countUpdated', count);
    io.emit('countUpdated', count);
  });
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
```

