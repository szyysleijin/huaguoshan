SET NAMES UTF8;
DROP DATABASE IF EXISTS xianguo;
CREATE DATABASE xianguo CHARSET=UTF8;
use xianguo;

create table lists(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img varchar(32),
	title varchar(32),
  subtitle varchar(32),
  original DECIMAL(12,2),
	price DECIMAL(12,2),
  assi varchar(32),
  buy varchar(8)
);
insert into lists values(null,"./img/index/11334_thumb.jpg","赣南脐橙6斤装（买5送1）","甜度适中 风味清香",42,35,'6斤',28018);
insert into lists values(null,"./img/index/11270_thumb.jpg","越南小青芒 8斤装（买5送3）","口感清新，酸甜宜人",46,39,'8斤',11918);
insert into lists values(null,"img/index/10989_thumb.jpg","南非红西柚 6个装（下单即送一个27#佳沛绿果）",'酸甜宜人',34,29,'6个装',21109);
insert into lists values(null,"img/index/11265_thumb.jpg","新西兰佳沛阳光金奇异果36# 10粒装",'口感清新，酸甜宜人','72小时内发货',79,'10粒',19497);
insert into lists values(null,"img/index/11452_thumb.jpg","新西兰佳沛金奇异果22粒 原箱装",'金奇异果王国的国王，超大个','248',238,'22号原箱装',5067);
insert into lists values(null,"img/index/11384_thumb.jpg","新西兰佳沛阳光金奇异果18#巨无霸原箱",'口感清新，酸甜宜人',278,248,'18粒',12830);
insert into lists values(null,"img/index/11300_thumb.jpg","佳沛新西兰经典绿奇异果36# 18个装 单果",'营养密度极高的水果','119',89,'18个装',9682);
insert into lists values(null,"img/index/11278_thumb.jpg","新西兰佳沛阳光金奇异果36# 36个原箱装",'口感清新，酸甜宜人','259',238,'36粒',4781);
insert into lists values(null,"img/index/11249_thumb.jpg","新西兰佳沛阳光金奇异果25/27# 8个",'历经十年培育成功的天然新品种','100',88,'8个',13342);
insert into lists values(null,"img/index/11243_thumb.jpg","佳沛新西兰经典绿奇异果36# 10个装 单果",'酸甜可口，口感清新，营养密度高','69',59,'10个装',7175);
insert into lists values(null,"img/index/11236_thumb.jpg","【包邮】佳沛新西兰经典绿奇异果 39# 10个装 单果重82~92g",'历经十年培育成功的天然新品种','59',49.9,'10个装',7132);
insert into lists values(null,"img/index/11234_thumb.jpg","佳沛新西兰经典绿奇异果25/27# 8个装 ",'口感清新，酸甜宜人','75',59,'8个',4322);
insert into lists values(null,"img/index/11227_thumb.jpg","【包邮】佳沛新西兰经典绿奇异果36# 12个装 单果重93~104g",'营养密度极高的水果','69',59,'12个',4367);
insert into lists values(null,"img/index/11191_thumb.jpg","新西兰佳沛阳光金奇异果25/27# 8个",'历经十年培育成功的天然新品种','111',99,'8个',21428);
insert into lists values(null,"img/index/11134_thumb.jpg","佳沛新西兰经典绿奇异果22/25/27# 原箱",'口感清新，酸甜宜人','138',128,'原箱装',22805);
insert into lists values(null,"img/index/11090_thumb.jpg","【包邮】佳沛新西兰经典绿奇异果39# 24个装 单果重82~92g",'营养密度极高的水果','132',99,'24个',7493);
insert into lists values(null,"img/index/10769_thumb.jpg","新西兰佳沛阳光金奇异果25/27粒 原箱装",'营养密度极高的水果','238',218,'原箱装',5058);
insert into lists values(null,"img/index/11399_thumb.jpg","福建琯溪红肉蜜柚 5斤 2个",'历经十年培育成功的天然新品种','35',29,'5斤',7323);
insert into lists values(null,"img/index/11581_thumb.jpg","【预售11月28号开始发货】智利车厘子 ",'今冬第一茬智利车厘子,从枝头到舌尖的极致味蕾','168',149,'2磅',122);
insert into lists values(null,"img/index/11401_thumb.jpg","【预售17号开始发货】陕西徐香绿猕猴桃 ",'营养密度极高的水果','39',35,'5斤装',5737);
insert into lists values(null,"img/index/11568_thumb.jpg","玉紫心冰激凌薯 5斤装 单果重300g+",'历经十年培育成功的天然新品种','38',29,'5斤',1374);
insert into lists values(null,"img/index/11564_thumb.jpg","陕西板栗红薯 5斤装 单果重100g+",'营养密度极高的水果','35',25,'5斤',1647);
insert into lists values(null,"img/index/11470_thumb.jpg","福建琯溪四喜蜜柚4个装 10斤",'历经十年培育成功的天然新品种','30',25,'5斤',3369);
insert into lists values(null,"img/index/11467_thumb.jpg","【预售17号开始发货】四川蒲江红心猕猴桃 15个装",'营养密度极高的水果','36',27.7,'15个装',4187);
insert into lists values(null,"img/index/11290_thumb.jpg","【预售17号开始发货】四川金艳黄心猕猴",'单果重：70-90g','38','35','5斤',6317);
insert into lists values(null,"img/index/11213_thumb.jpg","福建琯溪白肉蜜柚 5斤装 2个",'单果重：70-90g',25.5,19.9,'5斤装',13065);
insert into lists values(null,"img/index/11143_thumb.jpg","台湾文旦柚2个装",'单果重：70-90g','38',35,'5斤',7913);
insert into lists values(null,"img/index/11579_thumb.jpg","云南小黄姜 3斤装",'历经十年培育成功的天然新品种','23',19.3,'3斤',563);
insert into lists values(null,"img/index/11578_thumb.jpg","山东蒙阴鲜板栗 5斤装",'单果重：70-90g','38',35,'5斤',6317);
insert into lists values(null,"img/index/11574_thumb.jpg","云南河口瑶族红心木瓜 9斤装 3~5个",'单果重：70-90g','38',35,'9斤',880);
insert into lists values(null,"img/index/11465_thumb.jpg","【预售17号开始发货】广西玉林百香果 3",'甜酸可口，风味浓郁，芳香怡人，有果汁之王的','40',35,'3斤',4966);
insert into lists values(null,"img/index/11555_thumb.jpg","贝贝南瓜 5斤装",'一口粉糯，满嘴香甜','30',25,'5斤',2008);
insert into lists values(null,"img/index/11256_thumb.jpg","【预售11月25号开始发货】智利进口新鲜",'粒粒新鲜，饱满香甜','128',125,'4盒',4760);
insert into lists values(null,"img/index/11241_thumb.jpg","秘鲁牛油果 6个装",'口感细腻绵滑，婴幼儿辅食佳选','59',49,'6个装',17430);
insert into lists values(null,"img/index/11344_thumb.jpg","泰国龙眼 2.5斤装",'粒粒新鲜，饱满香甜',33.5,29.9,'2.5斤',5708);
insert into lists values(null,"img/index/11185_thumb.jpg","泰国椰青4粒装",'肉色白如玉 椰汁甘甜细腻 奶香纯天然 一个椰青','58',55.9,'4粒',32327);
insert into lists values(null,"img/index/11354_thumb.jpg","新疆小香梨5斤装",'粒粒新鲜，饱满香甜','58',55,'5斤',11296);
insert into lists values(null,"img/index/11373_thumb.jpg","越南红心火龙果（小果）5斤装",'单果重390g-400g','59',49,'5斤',2732);
insert into lists values(null,"img/index/11565_thumb.jpg","山东黄元帅苹果 5斤装 单果重180g+",'单果重390g-400g','48',45,'5斤',1687);
insert into lists values(null,"img/index/11562_thumb.jpg","河北皇冠梨 5斤装",'单果重390g-400g','38',35,'5斤',1785);
insert into lists values(null,"img/index/11257_thumb.jpg","法国加力果 6个装 单果重160~180g",'来自浪漫法兰西的甜美，口感爽脆，果汁丰盈','38',29,'6个',2365);
insert into lists values(null,"img/index/11252_thumb.jpg","新疆阿克苏糖心苹果 5斤装 ",'口感爽脆，甜蜜糖心','59',49,'5斤',10528);
insert into lists values(null,"img/index/11550_thumb.jpg","泸沽湖野生苹果 5斤装",'单果重390g-400g','38',35,'5斤',2033);
insert into lists values(null,"img/index/11263_thumb.jpg","新疆阿克苏糖心苹果 5斤装 ",'脆甜多汁，风味独特','49',39,'5斤',7593);
insert into lists values(null,"img/index/11509_thumb.jpg","【预售17号开始发货】陕西洛川富士 4斤",'脆甜多汁，风味独特','39',35,'4斤',2955);
insert into lists values(null,"img/index/11469_thumb.jpg","昭通丑苹果 5斤装",'单果重390g-400g','45',39,'5斤装',3025);
insert into lists values(null,"img/index/11353_thumb.jpg","越南甜心芒 5斤装",'单果重390g-400g','48',45,'5斤装',8837);
insert into lists values(null,"img/index/11428_thumb.jpg","越南大青芒 5斤装",'单果重390g-400g','49',39,'5斤装',7599);
insert into lists values(null,"img/index/11270_thumb (1).jpg","【预售17号开始发货】越南小青芒 8斤装 ",'72小时内发货','45',39,'8斤装',18052);
insert into lists values(null,"img/index/11460_thumb.jpg","澳洲脐橙 12个装",'肉质细脆化渣、多汁，风味浓郁、爽口','59',55,'12个装',4370);
insert into lists values(null,"img/index/11570_thumb.jpg","云南哀牢山冰糖橙 5斤装 ",'72小时内发货','33',29,'5斤',1205);
insert into lists values(null,"img/index/11472_thumb.jpg","【预售17号开始发货】四川爱媛橙 5斤装 ",'72小时内发货','49',39,'8斤',1761);
insert into lists values(null,"img/index/11458_thumb.jpg","南非脐橙 12个装 ",'肉质细脆化渣、多汁，风味浓郁、爽口','65',59,'12个装',6973);
insert into lists values(null,"img/index/11287_thumb.jpg","广西金桔 2斤装 ",'一口一个连皮吃的小桔子','18',15,'2斤',613);
insert into lists values(null,"img/index/11275_thumb.jpg","四川安岳柠檬 3斤装 单果重90~120g ",'果汁率54%，汁多味酸','18',15,'3斤',730);
insert into lists values(null,"img/index/11260_thumb.jpg","澳洲阳光脐橙8个装 ",'肉质细脆化渣、多汁，风味浓郁、爽口','45',38,'8个',4222);
insert into lists values(null,"img/index/11244_thumb.jpg","【预售11月25号开始发货】农夫山泉 ",'一口一个连皮吃的小桔子','79',69,'6斤',7210);
insert into lists values(null,"img/index/11150_thumb.jpg","广西皇帝柑 5斤装 ",'旧时皇帝御前果，如今送它到您家。','38',35,'5斤',6139);
insert into lists values(null,"img/index/10806_thumb.jpg","南非进口脐橙 8个装 ",'一口一个连皮吃的','38',35,'8个',5860);
insert into lists values(null,"img/index/11580_thumb.jpg","湖北九月红橙 5斤装 ",'肉质细脆化渣、多汁，风味浓郁、爽口','38',29,'5斤',481);
insert into lists values(null,"img/index/11501_thumb.jpg","黔阳冰糖橙 8斤装 单果重80~120g ",'肉质细脆化渣、多汁，风味浓郁、爽口','39',35,'8个',5860);
insert into lists values(null,"img/index/10806_thumb.jpg","南非进口脐橙 8个装 ",'一口一个连皮吃的','35',29,'8斤',560);
insert into lists values(null,"img/index/11471_thumb.jpg","湖北秭归甜橙 5斤装 ",'肉质细脆化渣、多汁，风味浓郁、爽口','30',25,'4斤',2454);
insert into lists values(null,"img/index/10845_thumb.jpg","花果山礼品卡￥200 ",'精致美观，时尚大方。企业福利、送礼馈赠优上之选','205',200.00,'1张',32969);
insert into lists values(null,"img/index/10844_thumb.jpg","花果山礼品卡￥500 ",'精致美观，时尚大方。企业福利、送礼馈赠优上之选','512',500.00,'1张',32521);
insert into lists values(null,"img/index/10846_thumb.jpg","花果山礼品卡￥100 ",'精致美观，时尚大方。企业福利、送礼馈赠优上之选','103',100.00,'1张',32609);





create table dl(
	userid INT PRIMARY KEY AUTO_INCREMENT,
	username varchar(32),
	userupwd varchar(32)
	
);
insert into dl values(null,'leilei','123456');

#create table imglist(
#	img varchar(32)
#)
# insert into imglist values({'img1','img2'});








  
 
	


