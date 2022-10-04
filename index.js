var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/style')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});

io.on('connection', (socket) => {

    socket.on('GameDataSource', data => {
        // io.emit('boardMessage', msg);
        // console.log(msg);
        io.emit('GameDataSend', {data:data});

    });


});


http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});