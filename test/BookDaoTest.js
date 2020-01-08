const mongoose=require('mongoose')
require('../model')
let bookDao=require('../dao/BookDao');
const assert=require('assert')

describe("测试BookDao",function () {
   before(function () {
      mongoose.connect('mongodb://localhost/demo02',{useMongoClient:true},function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it("测试添加一本书",function (done) {
        let book={name:'john',price: 200}
        bookDao.addBook(book,function (nb) {

            assert.ok(nb._id!=null)
            done()
        })
    })

    it("修改一本书",function (done) {
        let book={_id:'5e15dfdaafb94d1a88366d36',name:'john666',price: 300}
        bookDao.updateBook(book._id,book,function (nb) {
            assert.ok(nb._id!=null)
            console.log(nb)
            done()
        })
    })
    it('测试查询所书',function (done) {
       bookDao.findAllBooks(function (books) {
           assert.ok(books.length>0)
           books.forEach(book=>console.log(book._id))
           done()
       })
    })
    it("测试删除",function (done) {
        bookDao.deleteBook("5e1594778cecb30d96e13157",function ({}) {
            console.log({})
            done()
        })
    })


})