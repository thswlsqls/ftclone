const express = require('express');

const app = express();

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

//리슨
const port = process.env.PORT || 5000;

//리슨
// const port = 5001;
app.listen(port, () => {
  console.log(chalk.cyanBright(`Express Server is running at port ${port}`));
});
