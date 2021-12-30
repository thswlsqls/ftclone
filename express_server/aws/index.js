// const AWS = require('aws-sdk');
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const { fileURLToPath } = require('url');

const chalk = require('chalk');
const path = require('path');

const multer = require('multer');
const multerS3 = require('multer-s3');

const bucket = 'myawsbucket-mern-test';
const region = 'ap-northeast-2';
const accessKeyId = 'AKIAWA5G6SXKQIS772VH';
const secretAccessKey = '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';

const s3 = new S3({
  region: region,
  acl: 'public-read',
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

const socketUpload = multer({
  storage: multerS3({
    s3,
    bucket,
    acl: 'public-read',
    metaData: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `socket/upload/${Date.now().toString()}/${file.originalname}`);
    },
  }),
});

function socketUploadFile(filePath, mimetype) {
  const ContentType = String(mimetype);
  const ext = path.extname(filePath);

  const params = {
    Bucket: bucket,
    Body: fs.createReadStream(`.\\${filePath}`.replace('\\', '/')),
    Key: String(filePath).replace('\\', '/'),
    ContentType: ContentType,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      console.log(
        chalk.blue(
          's3 socket 업로드 폴더에 파일을 저장함' +
            `${data.Key}`.replace('\\', '/')
        )
      );
    }
  });
}

exports.socketUpload = socketUpload;
exports.socketUploadFile = socketUploadFile;
