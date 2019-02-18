const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由

router.post('/',function(req,res){
	var username=req.body.username;
	var userupwd=req.body.userupwd;
	var sql = 'select * from dl where username=? and userupwd=?';
	pool.query(sql,[username,userupwd],function(err,result){
		if(err) throw err;
		console.log(result)
		if(result.length!=0){
			res.send('1')
		}else{
			res.send('0')
		}
			
		
	})
})

module.exports = router;  //导出路由