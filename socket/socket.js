const {Server}=require ("socket.io")
const http=require('http')
const express = require("express")

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [`https://chatify-yz2w.onrender.com`],
        methods: ['GET', 'POST'],
    },
});
const userSocketMap = {};
const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

io.on('connection', (socket) => {
    console.log('user connected',socket.id)
    const userId = socket.handshake.query.id
    if (userId !== undefined) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id)
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
})
module.exports = { app, io, server ,getReceiverSocketId}