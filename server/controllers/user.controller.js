const User      = require('../models/user.model')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const { hasher }  = require('../helpers/hashPassword.helper')
const rahasia   = process.env.secret

module.exports = {
    signup(req, res){
    console.log(req.body)
    let ObjUser = {
        judul: req.body.judul,
        penerbit: req.body.penerbit,
        penulis: req.body.penulis,
        deskripsi: req.body.deskripsi,
        // url: req.file.cloudStoragePublicUrl
    }
    const newBook = new Book(ObjBook)
    newBook.save()
        .then( Book => {
            res.status(201).json({
                message: "input item success",
                data: Book    
            })
        })
        .catch( error => console.log(error))
    },

    userSignUp: ( req, res ) => { 
        User.find({
            email: req.body.email
          })
          console.log('>>>>>>>>>>>>>>>',req.body)
        .then( userSelect => {
          if( userSelect.length === 0 ){
          // if( userSelect === undefined ){
            let userObj = {
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
              // password: hasher(req.body.password)
            }
            
            console.log('sudah disini===============', userObj ) 
            const newUser = new User(userObj)
            newUser.save()
            .then( userInserted => {
              //  console.log(userInserted)
              res.status(201).json({
                  message: "signup success",
                  data: userInserted
              })
            })
            .catch( error => {
              //  const message = error.response.data
              console.log(error)
            })
          }
          else{
              console.log('username sudah ada coy...')
          }
        })
        .catch( error => {
            // const message = error.response.data
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