const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由

// router.get('/',(req,res)=>{
// 	var sql = 'select * from lists';
// 	pool.query(sql,(err,result)=>{
// 		if(err) throw err;
// 		res.send(result)
// 	})
// })


// router.get('/',(req,res)=>{
// 	var pno = req.query.pno;
// 	var pageSize=req.query.pageSize;
// 	if(!pno){pno=1}
// 	if(!pageSize){pageSize=15}
// 	var reg=/^[0-9]{1,3}$/;
// 	if(!reg.test(pno)){
// 		res.send({code:-1,msg:'页码格式不正确'})
// 		return 
// 	}
// 	if(!reg.test(pageSize)){
// 		res.send({code:-2,msg:'页大小格式不正确'})
// 		return 
// 	}
// 	
// 	// var sql = 'select count(id) as c from xz_news';
// 	
// // 	pool.query(sql,(err,result)=>{
// // 		if(err) throw err;
// // 		var pageCount = Math.ceil(result[0].c/pageSize);
// // 		res.send(':'+pageCount)
// // 	})
// 	 var offset=parseInt((pno-1)*pageSize)
// 				pageSize=parseInt(pageSize);
// 				
// 	var sql='select * from lists limit ?,?';
// 	// var offset =(pno-1)*pageSize;
// 	pool.query(sql,[offset,pageSize],(err,result)=>{
// 		if(err) throw err;
// 		res.send(result)
// 	})
// })

// 全部商品 分页查询

router.get("/",(req,res)=>{
 //1:获取参数
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=12}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }

 var progress = 0;
 var obj = {code:1};
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT * FROM lists";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
	 obj.all=result;

   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
//  var sql =" SELECT id,title,ctime,img_url,";
//      sql+=" point,content";
//      sql+=" FROM xz_news";
//      sql+=" LIMIT ?,?";
 var sql='select * from lists limit ?,?';

 var offset=parseInt((pno-1)*pageSize)
		 pageSize=parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
 //7:返回结果
});  



// 降序排列SELECT * FROM lists ORDER BY  buy asc;

router.get("/desc",(req,res)=>{
 //1:获取参数
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=12}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }

 var progress = 0;
 var obj = {code:1};
 //5:创建sql1 查询总记录数   严格区分大小写
 
 // 降序排列

 var sql = "SELECT count(cid) AS c FROM lists";
 pool.query(sql,(err,result)=>{
   if(err)throw err;

   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
//  var sql =" SELECT id,title,ctime,img_url,";
//      sql+=" point,content";
//      sql+=" FROM xz_news";
//      sql+=" LIMIT ?,?";
 var sql='SELECT * FROM lists ORDER BY buy+0 DESC limit ?,?';

 var offset=parseInt((pno-1)*pageSize)
		 pageSize=parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
 //7:返回结果
});  




module.exports = router;  //导出路由