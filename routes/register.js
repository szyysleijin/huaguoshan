const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由

router.post('/',(req,res)=>{
	var username=req.body.username;
	var userupwd=req.body.userupwd;
	if(!username){
		res.send('用户名不能为空');
		return;
	}
	if(!userupwd){
		res.send('密码不能为空');
		return;
	}
	
	var sql='insert into dl values(null,?,?)';
	// var sql='select * from dl where username=?'
	pool.query(sql,[username,userupwd],(err,result)=>{
		console.log(result)
		if(err) throw err;
		
		if(result.affectedRows!=0){
			res.send("1");		//添加成功 返回1
		}else{
			res.send('0');		
		}
	})
})


module.exports = router;  //导出路由