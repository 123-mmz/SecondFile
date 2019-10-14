(function () {
    var navData = [{
            title: ['时尚女装'],
            id: 1,
            content: [{
                    title: '上衣',
                    content: ['t恤', '卫衣', '衬衫', '雪纺/蕾丝裙', '打底衫']
                },
                {
                    title: '裙子',
                    content: ["连衣裙", "半身裙", "套装裙"]
                },
                {
                    title: '针织毛衣',
                    content: ["开衫", "套头", "毛衫外套"]
                },
                {
                    title: '裤子',
                    content: ["休闲裤", "牛仔裤", "阔腿裤"]
                },
                {
                    title: '外套',
                    content: ["风衣", "呢料外套", "羽绒服", "棉服"]
                },
                {
                    title: '特色服装',
                    content: ["时尚套装", "运动服", "礼服"]
                }
            ]
        },
        {
            title: ['箱包配饰'],
            id: 2,
            content: [{
                    title: '女包',
                    content: ['单肩包', '女士钱包', '真皮包', '手提包', '小方包', '斜挎包', '晚宴包', '手拿包']
                },
                {
                    title: '双肩包',
                    content: ["出街潮搭", "户外休闲", "帆包", "儿童背包"]
                },
                {
                    title: '男包',
                    content: ["男士钱包", "胸包", "腰包", "单肩包", "斜挎包", "手提包", "手拿包"]
                },
                {
                    title: '功能箱包',
                    content: ["拉杆箱", "卡包", "旅行袋", "电脑包", "书包", "化妆箱", "便当包", "化妆包", "文件包"]
                },
                {
                    title: '鞋靴',
                },
            ]
        },
        {
            title: ['精品男装'],
            id: 3,
            list: ['当季流行', '秋冬新品', '潮流卫衣', '修身夹克', '牛仔衬衫'],
            content: [{
                    title: '运动',
                    content: ['上衣']
                },
                {
                    title: '内搭',
                    content: ["t恤", "衬衫", "卫衣", "POLO衫"]
                },
                {
                    title: '外套',
                    content: ["针织衫/毛衣", "棉服/风衣", "西装", "呢外套", "棒球服"]
                },
                {
                    title: '男士裤装',
                    content: ["牛仔裤", "休闲裤", "西裤"]
                },
                {
                    title: '外套',
                    content: ["风衣", "呢料外套", "羽绒服", "棉服"]
                },
                {
                    title: '特色服装',
                    content: ["时尚套装", "运动服", "礼服"]
                }
            ]
        },
        {
            title: ['美容美妆'],
            list: ['当季流行', '面膜', '护肤套装', '身体乳', '卸妆'],
            id: 4,
            content: [{
                    title: '美容护肤',
                    content: ['防晒', '化妆水', '精油皂', '眼部护理', '乳液/面霜', '面膜', '洁面', '面部精华', 'T区护理', '护肤套装']
                },
                {
                    title: '彩妆/化妆工具',
                    content: ["BB霜/隔离打底", "化妆棉", "卸妆油", "指甲油", "睫毛膏", "腮红", "眉笔", "唇膏/唇蜜/口红", "美甲", "眼线笔", "香水", "眼影"]
                },
                {
                    title: '身体护理',
                    content: ["沐浴露", "洗发露", "洗护套装", "牙膏", "漱口水", "沐浴油", "手膜/足膜", "身体乳", "手霜"]
                },
                {
                    title: '美发护发',
                    content: ["染发烫发", "头发造型", "洗发护发"]
                },
                {
                    title: '女性护理',
                    content: ["卫生巾", "私处护理"]
                },
                {
                    title: '洗涤',
                },
            ]
        },
        {
            title: ['母婴童装'],
            list: ['当季流行', '婴儿推车', '婴儿洗护', '智伴机器人'],
            id: 5,
            content: [{
                    title: '童装',
                    content: ['童T恤', '童裙', '童裤子', '儿童套装', '童内衣裤']
                },
                {
                    title: '孕婴用品',
                    content: ["纸尿裤", "婴儿推车", "抱被", "哺乳装", "孕妇装", "婴儿背带"]
                },
                {
                    title: '洗护',
                    content: ["驱虫止痒", "洗发水", "沐浴露", "润肤", "浴巾", "洗衣液", "洗衣皂", "理发器"]
                },
                {
                    title: '喂养',
                    content: ["奶瓶", "奶嘴", "餐具", "辅食机", "暖奶器"]
                },
                {
                    title: '玩具',
                    content: ["儿童玩具", "婴儿玩具", "儿童扭扭车"]
                },
                {
                    title: '奶粉',
                    content: ["奶粉", "宝宝营养", "宝宝辅食"]

                },
            ]
        },
        {
            title: ['性感内衣'],
            list: ['当季流行', '运动文胸', '无痕文胸', '潮流家居服'],
            id:6,
            content: [{
                    title: '文胸',
                    content: ['文胸套装']
                },
                {
                    title: '内裤',
                    content: ["女士内裤", "男士内裤"]
                },
                {
                    title: '家居服',
                    content: ["睡裙", "女士睡衣"]
                },
                {
                    title: '特色内衣',
                    content: ["塑身内衣", "运动内衣"]
                },
                {
                    title: '袜子',
                    content: ["休闲棉袜"]
                },

            ]
        },
        {
            title: ['数码电器'],
            list: ['当季流行', '料理机', '智能电器', '净水设备', '取暖器'],
            id: 7,
            content: [{
                    title: '生活电器',
                    content: ['电风扇', '加湿器', '洗鞋机', '空气净化/氧吧', '扫地机器人', '温湿碟/垫取暖器', '烘干机', '排气扇', '热水器', '灭蚊灯']
                },
                {
                    title: '厨房电器',
                    content: ["电锅/煲类", "电热水壶/瓶", "点热饭煲", "豆浆机/榨汁机/料理机", "电磁炉", "茶具/茶炉", "面包机/咖啡机", "饮水/净水设备", "商用厨电", "厨师机", "其他厨房家电", "果蔬机", "食物烘干机", "炒菜机", "绞肉机"]
                },
                {
                    title: '个人护理',
                    content: ["家用保健器材", "口腔护理"]
                },
                {
                    title: '3C数码/配件',
                    content: ["手机壳/膜", "数据线/充电器", "耳机", "充电宝", "音箱/喇叭"]
                },
                {
                    title: '大家电',
                    content: ["洗碗机"]
                },

            ]
        },
        {
            title: ['食品零食'],
            list: ['当季流行', '进口零食', '进口洋酒', '西湖龙井', '绿茶'],
            id: 8,
            content: [{
                    title: '休闲零食',
                    content: ['饼干糕点', '坚果炒货']
                },
                {
                    title: '保健滋补',
                    content: ["传统滋补品", "冲调保健", '胶囊', '酵素']
                },
                {
                    title: '美酒&冲饮',
                    content: ["葡萄酒", "饮料/咖啡", "四季茗茶", "白酒", "养生酒"]
                },
                {
                    title: '粮油副食/农副产品',
                    content: ["健康杂粮", "厨房调料"]
                },


            ]
        },
        {
            title: ['饰品配件'],
            list: ['当季流行', '潮流发饰', '手表', '耳环', '项链'],
            id: 9,
            content: [{
                    title: '手表市场',
                    content: ['时尚手表', '商务手表', '运动手表']
                },
                {
                    title: '服饰配件',
                    content: ["眼镜", "帽子", '发绳', '发夹', '发箍/发带/发圈', '腰带']
                },
                {
                    title: '饰品市场',
                    content: ["耳环/耳坠", "项饰", "手链", "戒指", "吊坠"]
                },

            ]
        },


    ]

})();