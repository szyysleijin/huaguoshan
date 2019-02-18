const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由



//页面加载显示数据
router.get("/load",function(req,res){
	
	//随机查询8条数据
	
	var sql = "SELECT * FROM lists order by rand() LIMIT 8";
	pool.query(sql,function(err,result){
		if(err) throw err;

		res.send(result);
	});
});

router.get('/qiyiguo',function(req,res){
	//var e=decodeURIComponent('奇异果');
	var sql='select * from lists where title like "%奇异果%"'
	pool.query(sql,function(err,result){
		if(err) throw err;
		res.send(result)
	})
})

router.get('/mg',function(req,res){

	var sql='select * from lists where title like "%芒%"'
	pool.query(sql,function(err,result){
		if(err) throw err;
		res.send(result)
	})
})

router.get('/cz',function(req,res){

	var sql='select * from lists where title like "%橙%"'
	pool.query(sql,function(err,result){
		if(err) throw err;
		res.send(result)
	})
})

router.get('/ka',function(req,res){

	var sql='select * from lists where title like "%礼品卡%"'
	pool.query(sql,function(err,result){
		if(err) throw err;
		res.send(result)
	})
})

router.get('/pl',function(req,res){

	var sql='select *from lists where title like "%苹果%" or title like "%梨%"'
	pool.query(sql,function(err,result){
		if(err) throw err;
		
		res.send(result)
	})
})


module.exports = router;  //导出路由



/*var sql=''

if(value=0){
	sql = 'select * from car where price>80000'
}else if(value=1){
	sql = 'select * from car where price<150000 and price>80000'
}
pool.query(sql,function())*/