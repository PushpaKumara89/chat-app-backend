const express = require('express');
const http = require('http');
require('dotenv').config()
const { env } = require('process');
const {Server} = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"*",
        methods:["GET", "POST"]
    }
});

io.on('connection', (socket)=>{
    console.log(`user ${socket.id} is connected. `);
    socket.on('join', (data) =>{
        console.log(`user ${data.room} is room con. `);
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', data => {
        console.log( data.message)
        io.in(data.room).emit('new message', {user:data.user, message: data.message})
    });
    socket.on('disconnect', () =>{
        console.log(`user ${socket.id} is disconnect. `);
    });
});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Chat server is Running on port ${port}.`);
})