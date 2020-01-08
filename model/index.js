const mongoose=require('mongoose')
mongoose.Promise=require('q').Promise;
let BookSchema={name:String,price:Number}
let Customer={name:String,password:String,score:Number}

mongoose.model("Book",BookSchema)
mongoose.model("Customer",Customer)


