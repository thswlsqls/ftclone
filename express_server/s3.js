require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const { fileURLToPath } = require('url');

const chalk = require('chalk');
const path = require('path');

const bucketName = 'myawsbucket-mern-test';
const region = 'ap-northeast-2';
const accessKeyId = 'AKIAWA5G6SXKQIS772VH';
const secretAccessKey = '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';

const s3 = new S3({
  region: region,
  acl: 'public-read',
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

//uploads a file to s3

function uploadFile(filePath, mimetype) {
  //const filePath = 'uploads\\1616824366119_KnightCoding - 31210.mp4'

  const ContentType = String(mimetype);
  // filePath.match(/.mp4/) && filePath.endsWith('.mp4')
  //   ? 'video/mp4'
  //   : 'image/png';
  const ext = path.extname(filePath);

  const params = {
    Bucket: bucketName,
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
        chalk.blue('s3에 파일을 저장함' + `${data.Key}`.replace('\\', '/'))
      );

      if (String(mimetype).startsWith('video')) {
        unlinkFile(`${data.Key}`.replace('\\', '/')); // 서버에 저장된 원본 파일 삭제
        const thumbsFilePath = `${data.Key}`.replace('\\', '/');
        // unlinkFile(`${thumbsFilePath}`.replace('.mp4', '_1.png'));
        // unlinkFile(`${thumbsFilePath}`.replace('.mp4', '_2.png'));
        // unlinkFile(`${thumbsFilePath}`.replace('.mp4', '_3.png'));
        for (let i = 1; i < 4; i++) {
          unlinkFile(`${thumbsFilePath}`.replace(String(ext), `_${i}.png`));
        }
        // unlinkFile(`${thumbsFilePath}`.replace(String(ext), '_1.png'));
        // unlinkFile(`${thumbsFilePath}`.replace(String(ext), '_2.png'));
        // unlinkFile(`${thumbsFilePath}`.replace(String(ext), '_3.png')); //서버에 저장된 썸네일 파일 삭제
      } else {
        // unlinkFile(`${data.Key}`.replace('\\', '/')); //서버에 저장된 원본 파일 삭제
        // unlinkFile(`${data.Key}`.replace('\\resized-', '/')); //서버에 저장된 리사이징 파일 삭제
        for (let j = 0; j < 2; j++) {
          if (j == 0) {
            unlinkFile(`${data.Key}`.replace('\\', '/'));
          } else {
            unlinkFile(`${data.Key}`.replace('\\resized-', '/'));
          }
        }
      }
    }
  });
}

//downloads a file from s3

exports.uploadFile = uploadFile;
