const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    // Event Listener from client to server
    socket.emit('newMessage', {
        from: 'server',
        text: 'Hello World!',
        createdAt: 123
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});