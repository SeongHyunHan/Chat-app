var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // Emit Event from client to server
    socket.emit('createMessage', {
        from: 'client',
        text: 'Hello'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});