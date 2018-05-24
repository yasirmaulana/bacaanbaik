const User      = require('../models/user.model')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const { hasher }  = require('../helpers/hashPassword.helper')
const rahasia   = process.env.secret

module.exports = {
    userSignUp: ( req, res ) => { 
        User.find({
            email: req.body.email
          })
        .then( userSelect => {
          if( userSelect.length === 0 ){
            let userObj = {
              name: req.body.name,
              email: req.body.email,
              password: hasher(req.body.password)
            }
            
            const newUser = new User(userObj)
            newUser.save()
            .then( userInserted => {
              res.status(201).json({
                  message: "signup success",
                  data: userInserted
              })
            })
            .catch( error => {
              console.log(error)
            })
          }
          else{
              console.log('username sudah ada coy...')
          }
        })
        .catch( error => {
            console.log(error)
        })
    },

    userSignIn: ( req, res ) => {
        User.findOne({
            email: req.body.email
        })
        .then( userSelected => {
            // console.log(userSelected)
            let cekPass = bcrypt.compareSync(req.body.password, userSelected.password)
            if(cekPass){
                let token = jwt.sign({
                    id: userSelected._id,
                    email: userSelected.email,
                }, rahasia)
                res.status(200).json({
                    message: "User signIn",
                    token: token
                })
            }
            else{
                res.status(404).json({
                    message: "password is wrong!!!"
                })
            }
        })
        .catch( error => {
            // const message = error.respone.data
            res.send(error)
        })
    },
}