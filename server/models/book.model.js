const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
        judul: String,
        penerbit: String,
        penulis: String,
        deskripsi: String,
        imgurl: String
    },
    {timestamps: true}     
)

const Book = mongoose.model('book', userSchema)

module.exports = Book 