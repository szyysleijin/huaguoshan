const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由

router.get('/lis',function(req,res){
	var cid=req.query.cid;
	var sql='select * from lists where cid=?';
	pool.query(sql,cid,function(err,result){
		if(err) throw err;
		// console.log(result)
		res.send(result)
	})
	
})

module.exports = router;  //导出路由