const express = require('express');
const http = require('http');
require('dotenv').config()
const { env } = require('process');
const {Server} = require('socket.io');
const fs = require("fs");
const path = require("path");

const util = require('./util_service')


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
        io.in(data.room).emit('new message', {type:'text', user:data.user, message: data.message})
    });

    //file sharing
    socket.on('file', (data) => {
        console.log(`File received: ${data.filename}`);
        const fileBuffer = Buffer.from(data.fileData, 'base64');
        const randomFilename = new Date().getTime().toString() +"."+  data.filename.split(".")[1]
        console.log(randomFilename)
        const destination = path.join(__dirname, 'uploaded_files', randomFilename);

        fs.writeFile(destination, fileBuffer, (err) => {
            if (err) {
                console.error('Error saving the file:', err);
            } else {
                console.log('File saved successfully.');
                io.to(data.room).emit('new file', {type:'img', user: data.user, message: "http://localhost:3000/images/"+randomFilename });
            }
        });
    });

    socket.on('disconnect', () =>{
        console.log(`user ${socket.id} is disconnect. `);
    });
});


const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Chat server is Running on port ${port} `);
})

app.get('/api/getUser' , util.getUser)
app.use('/images', express.static('uploaded_files'));