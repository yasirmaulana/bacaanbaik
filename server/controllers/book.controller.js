const Book = require('../models/book.model')

module.exports = {
  addBook(req, res){
    console.log(req.body)
    let ObjBook = {
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
  }
}
