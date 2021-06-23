const mongoose = require('mongoose');
const types = mongoose.Schema.Types;
const bycrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    user_ID: {
        type:types.ObjectId
    },
    user_email: {
        type: types.String,
        maxlength: 50
    },
    user_name: {
        type: types.String,
        maxlength:40
    },
    password: {
        type: types.String,
        minlength:12
    },

    image: String,
    token: {
        type: types.String
    },
    tokenExp: {
        type: types.Number
    },

    role: {
        type: types.String,
        default: "user"
    },
    create_Date: {
        type: types.Date
    },
    gender: {
        type: types.String
    },
    birth: {
        type: types.Number
    }
})

//비밀번호 암호화 메서드. 유저정보가 저장되기 전에는 항상 이 함수가 실행된다.
userSchema.pre('save', function(next) { 
    
    var user = this;
    user.create_Date = new Date();

    if(user.isModified('password')){
        bycrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)
            
            bycrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err)
    
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

//로그인시 비밀번호 비교 메서드
userSchema.methods.comparePW = function(plainPassword, cb){
    bycrypt.compare(plainPassword, this.password, function(err, isMatch){
       if(err) {console.log(err); return cb(err)}
       cb(null, isMatch)
    })    
 }

 //로그인시 JWT 생성 메서드
userSchema.methods.generateJWT = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'PrivateKey')

    user.token = token;
    user.save(function(err, user){
        if(err) {console.log(err); return cb(err)}
        cb(null, user);
    })
    
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    jwt.verify(token, 'PrivateKey', function(err, decodeToken){
        user.findOne({"_id":decodeToken, "token":token}, function(err, userFinded){
            if(err) return cb(err)
            cb(null, userFinded)

        })
    })



}


const User = mongoose.model('User', userSchema);
module.exports = {User}
