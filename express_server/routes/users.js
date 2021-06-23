const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             Users
//=================================


router.post("/register", (req, res) => {
    const user = new User(req.body);
    user.save((err, userinfo) => {
        if(err) return res.send('register failed'+err)
        return res.status(200).json({registerSuccess: true});
    })
})

router.post("/login", (req, res) => {
    User.findOne({ user_email: req.body.user_email}, (err, user) => {
        if(!user)
            return res.json({
                loginSuccess: false,
                message: "The email doesn't exist"
            });

            user.comparePW(req.body.password, (err, isMatch) => {
                if(!isMatch)
                    return res.json({ 
                        loginSuccess: false,
                        message: "The password doesn't matched" 
                    });

                    user.generateJWT((err, user) => {
                        if(err) return res.status(400).send(err);

                        res.cookie("jwt", user.token).status(200).json({
                            loginSuccess: true, 
                            userID: user._id
                        });
                    })
            })
    })
})


router.get("/auth", auth, (req, res) => {

    console.log("express auth api:"+req.user);

    res.status(200).json({
        _id: req.user._id,
        idAdmin: req.user.role === "user" ? false : true,
        isAuth: true, //
        user_email: req.user.user_email,
        user_name: req.user.user_name,
        role: req.user.role,
        image: req.user.image
    })
})

router.get("/logout", auth, (req, res) => {

    User.findOneAndUpdate({_id: req.user._id}, {token: ""},  (err, user) => {
        if(err) return res.json({ logoutSuccess: false, err})
        return res.status(200).send({
            logoutSuccess: true
        })
    })
})

module.exports = router;