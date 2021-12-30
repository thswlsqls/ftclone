const express = require('express');
const router = express.Router();

const { socketUpload, socketUploadFile } = require('../aws/index.js');

router.get('/', (req, res) => res.send('socket router'));
// router.post('/upload', socketUpload.single('file'));

router.post('/test', (req, res) =>
  res.json({ data: 'socket router post test' })
);

module.exports = router;

// var server = require('../index');

// const { Server } = require('socket.io');
// const io = new Server(server, {
//   cors: {
//     origin: '*',
//     credentials: true,
//     methods: ['GET', 'POST'],
//   },
// });

// router.get('/', (req, res) => {
//   io.on('connection', (socket) => {
//     console.log(`User Connected: ${socket.id}`);

//     socket.on('join_room', (data) => {
//       socket.join(data);
//       console.log(`User with ID: ${socket.id} joined room: ${data}`);
//     });

//     socket.on('send_message', (data) => {
//       socket.to(data.room).emit('receive_message', data);
//     });

//     socket.on('disconnect', () => {
//       console.log('User Disconnected', socket.id);
//     });
//   });

//   res.send('server socket on ...');
// });

// origin: 'https://www.my-awssimplified.com',
// origin: 'http://localhost:3030'
