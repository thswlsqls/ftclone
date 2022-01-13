const express = require('express');

var app = express();
var app2 = express();

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

app2.use(bodyParser.urlencoded({ extended: true }));
app2.use(bodyParser.json());
app2.use(cookieParser());
app2.use(cors());

app.use('/api/users', require('./routes/users'));
app.use('/api/formDatas', require('./routes/formDatas'));
app.use('/api/comment', require('./routes/comments'));
app.use('/api/like', require('./routes/likes'));
app.use('/api/miniform', require('./routes/miniform'));
// app.use('/api/socket', require('./routes/socket'));

app2.use('/api/users', require('./routes/users'));
app2.use('/api/formDatas', require('./routes/formDatas'));
app2.use('/api/comment', require('./routes/comments'));
app2.use('/api/like', require('./routes/likes'));
app2.use('/api/miniform', require('./routes/miniform'));
// app2.use('/api/socket', require('./routes/socket'));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));
app2.use('/uploads', express.static('uploads'));

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

app.get('/', (req, res) => res.send('This is http server, the landing page.'));
app.get('/test', (req, res) => res.sendDate(''));

app2.get('/', (req, res) => res.send('This is https server, the landing page.'));
app2.get('/test', (req, res) => res.sendDate(''));

var debug = require('debug')('server:server');
var HTTP = require('http');
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

var port2 = normalizePort2('5002');
function normalizePort2(val) {
  var port2 = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port2 >= 0) {
    // port number
    return port2;
  }

  return false;
}

app2.set('port', port2);

var httpServer = HTTP.createServer(app);

const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST'],
  },
});
// origin: 'https://www.my-awssimplified.com',
// origin: 'http://localhost:3030'

app.get('/api', (req, res) => {
  res.send('express server');
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

const fs = require('fs');
const path = require('path');
const HTTPS = require('https');

var path_root = '/etc/letsencrypt/live/ftclone-portfolio.link/'

try {
    const options = {
        ca: fs.readFileSync(`${path_root}fullchain.pem`),
        key: fs.readFileSync(`${path_root}privkey.pem`),
        cert: fs.readFileSync(`${path_root}cert.pem`)
    }
    var httpsServer = HTTPS.createServer(options, app2);
    httpsServer.listen(port2);
    httpsServer.on('error', onError2);
    httpsServer.on('listening', onListening2);
} catch (error) {
    console.error(`failed to create https server on port 5002, ERR:${error}`);
}

const ioHttps = new Server(httpsServer, {
    cors: {
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST'],
    },
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

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

/*
httpsServer.listen(port2);
httpsServer.on('error', onError2);
httpsServer.on('listening', onListening2);
*/

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

function onError2(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port2 === 'string' ? 'Pipe ' + port2 : 'Port ' + port2;

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
    var addr = httpServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log(`express http server running on port ${addr.port}`);
  }

  function onListening2() {
    var addr = httpsServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log(`express https server running on port ${addr.port}`);
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

  module.exports = httpServer;
  module.exports = httpsServer;


