const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由

// router.get('/',(req,res)=>{
// 	var key =encodeURIComponent(req.query.key);
// 	var sql = `select title from lists where title like "%${key}%"`;
// 	pool.query(sql,(err,result)=>{
// 		if(err) throw err;
// 		console.log(result)
// 		res.send(result)
// 	})
// })
// 
router.get('/',function(req,res){
	var key=decodeURIComponent(req.query.key);
					
	// console.log(key)
	var sql=`select * from lists where title like "%${key}%"`;
	
	pool.query(sql,(err,result)=>{
		// console.log(sql)
		if(err) throw err;
		// console.log(result)
		res.send(result)
	})
})

module.exports = router;  //导出路由