(function () {
    let list = document.getElementById('goods_create');
    let id = decodeURI(location.search.slice(1));
    console.log(id)

    function init() {
        //初始化数据
        ajax({
            type: 'get',
            url: '../api/goods.php',
            data: {
                uid: id
            },
            success: str => {
                // console.log(str);
                create(str);
            }
            // ,  error : function(status) {
            //     //失败的回调
            //     console.log(status);


            // }
        });

        function create(str) {
            let arr = JSON.parse(str);
            // console.log(arr);
            let html = arr.map(item => {
                if (id == item.id) {
                    return `  <div class="goods_info">
                    <div class="title">
                        <h1 class="goods_name">${item.title}</h1>
                        <div class="goods_more">
                            <span></span>
                            <span class="more_tb">
                                <b class="dai_tb">支持淘宝店快速上架和一件代发货</b>
                                <b class="pi_tb">支持多件商品批发采购</b>
    
                            </span>
                        </div>
                    </div>
                </div>
                <div class="goods_info" id="goods_imfor">
                    <div class="goods_fl">                   
                    <div class="magnifier" id="magnifier1">
                    <div class="magnifier-container">
                     <div class="images-cover"></div>   
                       <div class="move-view"></div>
    
                            </div>
                        <div class="magnifier-assembly">
                          <div class="magnifier-btn">
                 <span class="magnifier-btn-left">&lt;</span>
                    <span class="magnifier-btn-right">&gt;</span>
                          </div>
                     <div class="magnifier-line">
                         <ul class="clearfix animation03">

        </ul>
    </div>
    
</div>
<div class="magnifier-view"></div>

</div>
    
    
                        <div class="share clearfix">
                            <div class="like">
                                <p class="like_pic">
                                    收藏商品（<em id="collect_num">5</em>人气）
                                </p>
                            </div>
                            <div class="share_tb">
                                <b>分享到</b>
                                <a href="###" class="weixin"></a>
                                <a href="###" class="weibo"></a>
                                <a href="###" class="qq"></a>
                                <a href="###" class="tj"></a>
    
                            </div>
                        </div>
                    </div>
                    <div class="goods_fr"  id="size_area">
                        <div class="fahuo clearfix">
                            <div id="look_free">
                                <em>包邮</em>
                                
                            </div>
                            <div class="amount">
                                <span class="value_top">>=1件</span>
                                <a href="###">
                                    <span class="value_bot" style="display: none">登录可见分销价</span>
                                    <span class="value_bot" style="padding-top:13px; font-size:26px;">￥${item.price}<b
                                            style="font-size:14px;">&nbsp;&nbsp;分销价</b></span>
    
                                </a>
                            </div>
                        </div>
                        <div class="famation clearfix">
                            <p class="fir">爆款指数：
                                <b>
                                    <img src="../img/xqy_10.jpg" alt="">
                                    <em>${item.mai}</em>件成交
                                </b>
                            </p>
                            <p class="advice">建议零售价：
                                <b>￥66.60</b>
                            </p>
                            <p class="huohao">货号
                                <input type="text" name="" id="bhao" value="ED28031237" class="bianhao">
                                <input type="button" value="复制" class="fz">
                                <span class="baoming">
                                    <a href="javascript:;">淘宝活动报名登记</a>
                                </span>
                            </p>
                            <p class="time">已上活动场次:
                                <b>16次</b>
    
                            </p>
                        </div>
                        <div class="shangjia clearfix">
                            <p class="sjia">
                                <span class="sjdttd">
                                    <a href="javascript:;" class="stb">上架到淘宝</a>
                                    <b class="img" style="left: 10px;top: 28px;"></b>
                                </span>
                                <span class="jrsjl">
                                    <a href="javascript:;" class="sjl">加入上架篮</a>
                                    <b class="img" style="left: -120px;"></b>
                                </span>
                                <span class="sjbxz">
                                    <a href="javascript:;" class="sjb">数据包下载</a>
                                    <b class="img" style="left: -354px;"></b>
                                    <b class="syjc">使用教程</b>
                                </span>
                            </p>
                        </div>
                        <div class="xinxi clearfix ">
                            <div class="huase clearfix">
                                <span class="color_title" style="width: 80px;display:inline-block ; ">颜色分类</span>
                                <span class="type ">
                                    <a href="javascript:;" class="selects">白色</a>
                                    <a href="javascript:;" class="selects">黑色</a>
                                    <a href="javascript:;"class="selects">浅绿色</a>
                                </span>
                            </div>
                            <div class="size clearfix" >
                                <div class="kuc_size">
                                    <div class="some_size clearfix">
                                        <p class="mashu" style="display: none">S</p>
                                        <p class="keshou">${item.kucun}件可售</p>
                                        <p class="tisi" >
                                         <span class="dan_price">${item.price}</span>元
                                        </p>
                                        <p class="chose">
                                            <a href="javascript:;" class="cut  no_limit"></a>
                                            <input type="text" name="" id="numm" value="0" maxlength="10" class="nums">
                                            <a href="javascript:;" class="add  no_limit"></a>
                                        </p>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div class="chose_goods">
                            <span class="c_color">颜色</span>
                            <span class="c_num">件数</span>
                            
                                <span class="y_num">数量</span>
                           
    
                        </div>
    
    
    
                        <div class="xiadan">
                            <p class="xd_price">
                                共<b class="sum">0</b>件，总共<em class="sumprice">00.00</em>元
                            </p>
                            <p class="xd_btn">
                                <a href="javascript:;" class="ljxd">立即下单</a>
                                <a href="javascript:;" class="jrjh">加入进货单</a>
                            </p>
                        </div>
                    </div>
                </div> 
                <div class="goods_right clearfix">
                <div class="pin_title">
                    <h3>品牌信息</h3>
                </div>
                <div class="pin_content">
                    <div class="neirong clearfix">
                        <p class="chanpin">
                            <a href="###">misu</a>
                        </p>
                        <dl class="cxin">
                            <dt>诚信指数:</dt>
                            <dd><a href="###"><img src="../img/pro_bgg.png" alt=""></a></dd>
                        </dl>
                        <dl class="zhuy">
                            <dt>主营产品：</dt>
                            <dd><a href="###">时尚女装</a>,</dd>
                        </dl>
                        <dl class="zongs">
                            <dt>商品总数：</dt>
                            <dd>48</dd>
                        </dl>
                    </div>
                    <div class="caozuo  ">
                        <a href="javascript:;">
                            <img src="../img/pro_bgh.png" alt="">
                            <span id="sjia">全部上架</span>
                        </a>
                        <a href="javascript:;">
                            <img src="../img/pro_bgi.png" alt="">
                            <span id="xzsjb">下载数据包</span>
                        </a>
                        <a href="javascript:;">
                            <img src="../img/pro_bgi.png" alt="">
                            <span id="tpb">商品图片包下载</span>
                        </a>
                    </div>
                    <div class="enter">
                        <p>入驻时间：2018-12-20</p>
                        <a href="javascript:;" class="en_shop">进入供应商店铺</a>
                    </div>
                </div>
                <div class="pin_search">
                    <div class="pin_conts">
                        <h3>看了又看
                            <a href="javascript:;"></a>
                        </h3>
                        <ul class="clearfix">
                            <li>
                                <a href="###">
                                    <img src="../img/clothes1-1.jpg" alt="">
                                </a>
                                <span>￥66.50</span>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="../img/clothes1-2.jpg" alt="">
                                </a>
                                <span>￥55.00</span>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="../img/clothes1-3.jpg" alt="">
                                </a>
                                <span>￥48.00</span>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="../img/clothes1-4.jpg" alt="">
                                </a>
                                <span>￥80.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
                }

            }).join('');

            list.innerHTML = html;

            let imgList = arr[0].murl.split(',');
            /* 渲染放大镜的图片 */
            console.log(imgList)
            html1 = imgList.map(function (item) {
                return `
                <li>
                    <div class="small-img">
                        <img src="${item}" />
                    </div>
                </li>
            `;
            }).join('');
            console.log(html1);
            $('#magnifier1 .animation03').html(html1);

            // $('#magnifier1  .animation03').html($html1);
            var magnifierConfig = { //配置参数
                magnifier: "#magnifier1", //最外层的大容器
                width: 400, //承载容器宽
                height: 400, //承载容器高
                moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
                zoom: 2 //缩放比例
            };

            var _magnifier = magnifier(magnifierConfig);

            // let strs = objToStr(id);

            console.log(id);


        }

    }
    init();

   

})();