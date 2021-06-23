const {User} = require('../models/User');


let auth = (req, res, next) => {

    let token = req.cookies.jwt;

    User.findByToken(token, (err, userFinded) => {
        if(err) throw err; 
        if(!userFinded) return res.json({ 
            isAuth: false, 
            error: true
        });
        req.token = token;
        req.user = userFinded;
        next();
    })
}


module.exports = {auth};