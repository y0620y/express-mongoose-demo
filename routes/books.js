var express = require('express');
var router = express.Router();
var bookDao=require('../dao/BookDao')
/* GET users listing. */
router.get('/', function(req, res) {
  bookDao.findAllBooks(function (books) {
    res.json(books)
  })
});

router.post('/',function (req,res) {
    let book=req.body
    bookDao.addBook(book,function (nb) {
      res.json(nb)
    })
})
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    bookDao.deleteBook(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
