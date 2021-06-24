require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const { fileURLToPath } = require('url')

const chalk = require('chalk')

const bucketName = 'myawsbucket-mern-test'
const region = 'ap-northeast-2'
const accessKeyId = ''
const secretAccessKey = ''

const s3 = new S3({
    'region' : region,
    'acl': 'public-read',
    'accessKeyId' : accessKeyId,
    'secretAccessKey' :  secretAccessKey
})

//uploads a file to s3

function uploadFile(filePath){
//const filePath = 'uploads\\1616824366119_KnightCoding - 31210.mp4'

const ContentType = (filePath.match(/.mp4/))&&(filePath.endsWith('.mp4')) ?  'video/mp4' : 'image/png'

    const params = {
        'Bucket': bucketName,
        'Body': fs.createReadStream(`.\\${filePath}`.replace("\\", "/")),
        'Key': filePath,
        'ContentType': ContentType
    }
    
    s3.upload(params, function(err, data){
        if(err){
            console.log(err);   
        }else{
            console.log(data);
            console.log(chalk.blue("s3에 파일을 저장함"+`${data.Key}`.replace("\\", "/")));
            
            if((`${data.key}`.match(/.mp4/))&&(`${data.key}`.endsWith('.mp4'))){
                unlinkFile(`${data.Key}`.replace("\\", "/"));
                const thumbsFilePath = `${data.Key}`.replace("\\", "/") 
                unlinkFile(`${thumbsFilePath}`.replace(".mp4", "_1.png"));
                unlinkFile(`${thumbsFilePath}`.replace(".mp4", "_2.png"));
                unlinkFile(`${thumbsFilePath}`.replace(".mp4", "_3.png"));
            }else{
                unlinkFile(`${data.Key}`.replace("\\", "/"));
                unlinkFile(`${data.Key}`.replace("\\resized-", "/"));     
            }
        }
    })
}

//downloads a file from s3

exports.uploadFile = uploadFile



