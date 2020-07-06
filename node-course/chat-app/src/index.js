const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;

io.on('connection', () => {
  console.log(`New WebSocket connection`);
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
