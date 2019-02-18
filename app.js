
const express = require("express");

const bodyParser = require("body-parser")  //导入中间件

const mypro = require("./routes/mypro.js");			//引入路由
const login = require('./routes/login.js')
const product = require('./routes/product.js')
const search  = require('./routes/search.js')
const category = require('./routes/category.js')
const header = require('./routes/header.js')
const register = require('./routes/register.js')
//创建web服务器
var app = express();
app.listen(0728);

/*app.use(bodyParser.urlencoded(		//使用中间件
	{extended:false;}
));*/
app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(express.static('static'));   //托管静态文件

app.use("/mypro",mypro);    //挂载路由044444444   
app.use('/login',login);
app.use('/product',product)
app.use('/search',search);
app.use('/category',category)
app.use('/header',header)
app.use('/register',register)



