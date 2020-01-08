var express = require('express');
var router = express.Router();
var bookDao=require('../dao/BookDao')
/* GET users listing. */
// 查全部列表
router.get('/', function(req, res) {
  bookDao.findAllBooks(function (books) {
    res.json(books)
  })
});
// 新增
router.post('/',function (req,res) {
    let book=req.body
    bookDao.addBook(book,function (nb) {
      res.json(nb)
    })
})

// 修改
router.put('/',function (req,res) {
  let book=req.body
  bookDao.updateBook(book._id,book,function (nb) {
    res.json(nb)
  })
})
// 删除
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    bookDao.deleteBook(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
