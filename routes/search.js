const express = require("express");  //引入express
 
const pool = require("./../pool.js");   // 引入Mysql链接模块

const router = express.Router();  //创建空理由

router.get('/',function(req,res){
	var key=decodeURIComponent(req.query.search);
					
	// console.log(key)
	var sql=`select * from lists where title like "%${key}%"`;
	
	pool.query(sql,(err,result)=>{
		// console.log(sql)
		if(err) throw err;
		// console.log(result)
		res.send(result)
	})
})


// router.get("/",(req,res)=>{
//   var search=decodeURIComponent(
//     req.query.search
//   );
//   
//   var output={
//     pno:0,
//     pageSize:8,
//     count:0,
//     pageCount:0, //=ceil(count/pageSize)
//     products:[]  //所有商品中starti,endi结束
//   }
//   if(req.query.pno!==undefined)
//     output.pno=parseInt(req.query.pno)
//   //"macbook i5 128g"
//   search=search.split(" ");
//   //[macbook,i5,128g]
//   search.forEach((val,i,arr)=>{
//     arr[i]=`%${val}%`
//   })
//   //[%macbook%,%i5%,%128g%]
//   var arr=[];
//   for(var kw of search){
//     arr.push(` title like ? `);
//   }
//   /*[
//     title like ?,
//     title like ?,
//     title like ?
//   ]*/
//   var where=" where "+arr.join(" and ");
//   var sql="select *,(select md from xz_laptop_pic where laptop_id=lid limit 1) as md from xz_laptop "+where;
//   pool.query(sql,kwords,(err,result)=>{
//     if(err) console.log(err);
//     var count=result.length;
//     var pageCount=
//       Math.ceil(count/output.pageSize);
//     output.count=count;
//     output.pageCount=pageCount;
//     var starti=output.pno*output.pageSize;
//     console.log(result)
//     output.products=result.slice(
//       starti,starti+output.pageSize
//     );
//     res.send(output)
//   })
// })

router.get('/sales',(req,res)=>{
	var obj= [
		{id:1,value:190,name:'小明'},
		{id:2,value:120,name:'小张'},
		{id:3,value:150,name:'小逼'},
		{id:4,value:90,name:'小邹'},
	]
	res.send(obj)
})











module.exports = router;  //导出路由