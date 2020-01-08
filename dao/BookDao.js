//dao/BookDao.js v1
const mogoose=require('mongoose')

let bookModel=mogoose.model("Book")
function addBook(book,callback) {
  let b=  bookModel.create(book,function (err,newBookDoc) {
        if(!err) callback(newBookDoc.toObject())
    })
}
// 修改
function updateBook(id,book,callback) {
    var nb = {$set:book};
    bookModel.findByIdAndUpdate(id,nb,function (err) {
          if(!err) callback(book)
      })
  }

function findAllBooks(callback) {
    bookModel.find({}).exec(function (err,books) {
        if(!err) callback(books)
    })
}

function deleteBook(id,callback) {
   bookModel.findByIdAndRemove(id,function (err) {
       if(!err) callback({})
   })
}

module.exports={addBook,deleteBook,findAllBooks,updateBook}
