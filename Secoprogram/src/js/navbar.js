
	$(function() {

		var navData=[
			{
				title:['家用电器'],
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'大家电',
						content:['平板电视', '空调', '销售总监', '区域总监', '销售副总', '店长', '招商经理']
					},
					{
						title:'生活电器',
						content:["电话销售", "渠道销售", "促销员", "二手房销售", "4S店销售", "会议营销", "奢侈品销售", "营业员"]
					},
					{
						title:'厨房电器',
						content:["电商销售","大客户销售","销售工程师","地产销售","金融销售","医药代表","业务员"]
					},
					{
						title:'个护健康',
						content:["市场经理","市场专员","品牌推广","市场企划","市场文案","市场活动","网络推广"]
					}
				]
			},
			{
				title:['家用电器2'],
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'大家电2',
						content:['平板电视', '空调', '销售总监', '区域总监', '销售副总', '店长', '招商经理']
					},
					{
						title:'生活电器2',
						content:["电话销售", "渠道销售", "促销员", "二手房销售", "4S店销售", "会议营销", "奢侈品销售", "营业员"]
					},
					{
						title:'厨房电器2',
						content:["电商销售","大客户销售","销售工程师","地产销售","金融销售","医药代表","业务员"]
					},
					{
						title:'个护健康2',
						content:["市场经理","市场专员","品牌推广","市场企划","市场文案","市场活动","网络推广"]
					}
				]
			},
			{
				title:['计算机','互联网','通信/电子'],
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'网络运营',
						content:['网店客服','SEO','网站推广','网络安全','网络架构','网站维护','网站策划','网站编辑']
					},{
						title:'程序员',
						content:['Web前端','Java','C++','PHP','C','C#','.NET','Node.js','HTML5/CSS3','Android','iOS','Flash']
					},{
						title:'设计师',
						content:['网店美工','UI设计师','VI设计师','网页设计','游戏界面设计','APP设计']
					},{
						title:'IT管理',
						content:['技术总监', '技术经理', '项目总监', '项目经理']
					},{
						title:'质量检测',
						content:['品质经理','系统测试','软件测试','硬件测试']
					},{
						title:'通信技术',
						content:['通信技术','有线传输','无线通信','电信交换','数据通信','移动通信','电信网络','通信电源']
					},{
						title:'电子电器',
						content:['集成电路', 'IC验证', '电子', '电气', '电路/(模拟/数字)', '电声/音响', '半导体技术', '自动控制', '电子软件开发', '嵌入式软件开发', '电池/电源开发', 'FAE 现场应用', '家用电器/数码产品研发', '分析师', '测试', '电子技术研发']
					}
				]
			},
			{
				title:'销售/客服/技术支持',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'销售管理',
						content:['销售主管', '销售经理', '销售总监', '区域总监', '销售副总', '店长', '招商经理']
					},
					{
						title:'坐家等客',
						content:["电话销售", "渠道销售", "促销员", "二手房销售", "4S店销售", "会议营销", "奢侈品销售", "营业员"]
					},
					{
						title:'往外跑的',
						content:["电商销售","大客户销售","销售工程师","地产销售","金融销售","医药代表","业务员"]
					},
					{
						title:'客服',
						content:["售前服务","售后服务","技术支持","呼叫中心"]
					}
				]
			},
			{
				title:'财务/审计/税务',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'财务',
					    content:['首席财务官 CFO','财务总监',	'财务经理',	'财务/总帐主管','成本会计','固定资产会计','出纳','财务/会计助理','会计文员','财务分析经理/主管','财务分析员']
					},
					{
					},
					{
						title:'审计税务',
					    content:['审计经理/主管','审计专员/助理',	'税务经理/税务主管',	'税务专员/助理',	'统计员']
					}
				]
			},
				{
				title:'金融/银行/保险',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'金融',
					    content:['证券/期货/外汇经纪人','证券分析师',	'股票/期货操盘手',	'金融/经济研究员','投资/基金项目经理','投资/理财顾问','投资银行业务','融资经理/融资主管','融资专员','拍卖/担保/典当业务','金融产品经理','投资银行财务分析','风险管理/控制']
					},
					{
					},
					{
						title:'银行',
					    content:['行长/副行长','资产评估/分析','风险控制','进出口/信用证结算','清算人员','外汇交易','高级客户经理/客户经理','客户主管/专员','信贷管理','银行柜员','银行卡、电子银行业务推广','个人业务部门经理/主管','个人业务客户经理','公司业务部门经理/主管','公司业务客户经理','综合业务经理/主管','综合业务专员','信审核查','营业部大堂经理','银行客户总监']
					},
					{
						title:'保险',
					    content:['保险精算师','保险产品开发/项目策划','保险业务经理/主管','保险代理/经纪人/客户经理','理财顾问/财务规划师','储备经理人','保险核保','保险理赔','保险客户服务/续期管理','保险培训师','保险内勤','契约管理']
					}
				]
			},
			{
				title:'生产/营运/采购/物流',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'生产营运',
						content:['']
					},
					{
						title:'质量安全',
						content:['']
					},
					{
						title:'机械能源',
						content:[''	]
					},
					{
						title:'汽车制造',
						content:['']
					},
					{
						title:'汽车销售',
						content:['']
					},
					{
						title:'服装纺织',
						content:['']
					},
					{
						title:'贸易',
						content:['']
					}
				]
			},
			{
				title:'生物/制药/医疗/护理',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'制药医疗器械',
						content:['']
					},
					{
						title:'化工',
						content:['']
					},
					{
						title:'医疗护理',
						content:['']
					}
				]
			},
			{
				title:'广告/市场/媒体/艺术',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'广告',
						content:['']
					},
					{
						title:'公关媒介',
						content:['']
					},
					{
						title:'市场营销',
						content:['']
					},
					{
						title:'影视媒体',
						content:['']
					},
					{
						title:'写作出版',
						content:['']
					},
					{
						title:'艺术设计',
						content:['']
					}
				]
			},
			{
				title:'建筑/房地产',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
						{
						title:'建筑装潢/市政建设',
						content:['']
					},
					{
						title:'房地产开发/销售',
						content:['']
					},
					{
						title:'房地产中介',
						content:['']
					},
					{
						title:'物业管理',
						content:['']
					}
				]
			},
			{
				title:'人事/行政/高级管理',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
						{
						title:'人力资源',
						content:['']
					},
					{
						title:'高级管理',
						content:['']
					},
					{
						title:'行政/后勤',
						content:['']
					}
				]
			},
			{
				title:'咨询/法律/教育/科研',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'咨询/顾问',
						content:['']
					},
					{
						title:'律师/法务/合规',
						content:['']
					},
					{
						title:'教师',
						content:['']
					},
					{
						title:'培训',
						content:['']
					},
					{
						title:'科研人员',
						content:['']
					}
				]
			},
			{
				title:'服务业',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
						{
						title:'餐饮/娱乐',
						content:['']
					},
					{
						title:'酒店/旅游',
						content:['']
					},
					{
						title:'美容/健身/体育',
						content:['']
					},
					{
						title:'百货/连锁/零售服务',
						content:['']
					},
					{
						title:'交通运输服务',
						content:['']
					},
					{
						title:'保安/家政',
						content:['']
					}
				]
			},
			{
				title:'公务员/翻译/其他',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'公务员',
						content:['']
					},
					{
						title:'翻译',
						content:['']
					},
					{
						title:'在校学生',
						content:['']
					},
					{
						title:'储备干部/培训生/实习生',
						content:['']
					},
					{
						title:'环保',
						content:['']
					},
					{
						title:'农林牧渔',
						content:['']
					},
					{
						title:'兼职',
						content:['']
					}
				]
			},
			{
				title:'管理岗位',
				id:'speedMenu'+parseInt(Math.random()*1000),
				content:[
					{
						title:'总监级',
						content:['运营总监','营销总监',	'销售总监',	'生产总监',	'制片总监',	'拍摄总监',	'创意总监',	'技术总监',	'执行总监',	'财务总监',	'设计总监']
					},
					{
						title:'经理级',
						content:['运营经理','营销经理',	'销售经理',	'生产经理',	'制片经理',	'拍摄经理',	'创意经理',	'技术经理',	'执行经理',	'财务经理',	'设计经理']
					}
				]
			}
		];
		ko.applyBindings({navData:navData})
		var scrollTimer,
			html = '',
			$menu = $(".macth-dropdown-menu");



		$menu.menuAim({
			activate: activateSubmenu,
			deactivate: deactivateSubmenu,
			exitMenu: function() {
				$(".macth_popover").hide();
				$(".macth_xvh3_a a.maintainHover").removeClass("maintainHover");
				$('.macth_xvitem.macth_itemhover').removeClass('macth_itemhover');
				$('.macth_xvitem s').show();
			}
		});

		function activateSubmenu(row) {
			var $row = $(row),
				submenuId = $row.data("submenuId"),
				$submenu = $("#" + submenuId),
				// height = $menu.outerHeight(),
				width = $menu.outerWidth();
			$submenu.css({
				display: "block",
				top: -1,
				left: width + 5
			});
			$row.addClass('macth_itemhover');
			$row.find("h3 a").addClass("maintainHover");
			$row.find("h3 s").hide();
		}

		function deactivateSubmenu(row) {
			var $row = $(row),
				submenuId = $row.data("submenuId"),
				$submenu = $("#" + submenuId);
			$submenu.hide();
			$row.removeClass('macth_itemhover');
			$row.find("h3 a").removeClass("maintainHover");
			$row.find("h3 s").show();
		}


		function showhide(dom,child){
			$(dom).hover(function() {
				$(this).addClass('active').find(child).show();
				$(this).siblings().find('.show').hide();
				$(this).siblings().removeClass('active');
			}, function() {
			});
		}
		//今日收益榜
		$(".scroll-top").hover(function() {
			clearInterval(scrollTimer);
		}, function() {
			scrollTimer = setInterval(function() {
				scrollNews($(".scroll-top"));
			}, 2000);
		}).trigger("mouseout");
		function scrollNews(obj) {
			var $self = obj.find("ul:first");
			var lineHeight = $self.find("li:first").height();
			$self.animate({
				"margin-top": -lineHeight + "px"
			}, 600, function() {
				$self.css({
					"margin-top": "0px"
				}).find("li:first").appendTo($self);
			})
		}
	});