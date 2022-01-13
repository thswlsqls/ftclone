const express = require('express');

var app = express();

const chalk = require('chalk');
const bodyParser = require('body-parser'); //요청을 분석하여 가져옴
const cookieParser = require('cookie-parser');
const cors = require('cors');

// 설정
const config = require('./config/dev');

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/users', require('./routes/users'));
app.use('/api/formDatas', require('./routes/formDatas'));
app.use('/api/comment', require('./routes/comments'));
app.use('/api/like', require('./routes/likes'));
app.use('/api/miniform', require('./routes/miniform'));
// app.use('/api/socket', require('./routes/socket'));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

//db연결
const mongoose = require('mongoose');
const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DB0',
  })
  .then(() =>
    console.log(
      chalk.greenBright('MongoDB Atlas connected successfully : cluster0')
    )
  )
  .catch((err) =>
    console.log(
      chalk.redBright('MongoDB Atlas is not connected, err ocuured : ' + err)
    )
  );

//요청 라우팅

app.get('/', (req, res) => res.send('This is the landing page.'));
app.get('/test', (req, res) => res.sendDate(''));

var debug = require('debug')('server:server');
var http = require('http');


var port = normalizePort(process.env.PORT || '5001');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

app.set('port', port);

var server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST'],
  },
});
// origin: 'https://www.my-awssimplified.com',
// origin: 'http://localhost:3030'

// app.get('/api', (req, res) => {
//   io.of('/socket').on('connection', (socket) => {
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
//   res.send('express server' + socket);
// });

io.of('/socket').on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

//리슨
// const port = process.env.PORT || 5000;

//리슨
// const port = 5001;
// app.listen(port, () => {
//   console.log(chalk.cyanBright(`Express Server is running at port ${port}`));
// });

// export default app;

// export default server;

module.exports = server;
