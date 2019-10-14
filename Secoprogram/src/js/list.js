(function () {
    let list = document.getElementById('list');
    let pages = document.getElementById('pages');
    let pricenum = document.getElementById('pricenum');
    let cut = document.getElementById('newnum');
    let text = document.getElementById('search_text');
    let search = document.getElementById('search_button');
    let sles = document.getElementsByClassName('sel_sort');

    let ipage = 1; //获取第一页
    let num = 20; //每页5条数据
    let paixu = '';
    let sale = '';
    let text1 = '';
    let text2 = '';
    let thingname = '';
    // let search = document.getElementById('sousuo');
    // let text = document.getElementById('text');

    //1.获取第一页的内容渲染到页面(按需加载)
    function init() {
        // var arr;
        ajax({

            type: 'get',
            url: '../api/orderby.php',
            data: {
                ipage,
                num,
                paixu,
                thingname,
                sale,
                // text1,
                // text2

            },
            success: str => {
                // console.log(str);
                // arr = JSON.parse(str);
                create(str);
            }
        });


        //1、数据渲染
        function create(str) {
            let arr = JSON.parse(str);
            // console.log(arr);
            let html = arr.list.map(item => {
                return ` <li class="list_item" data-id="${item.id}">
                <div class="bigpic">
                    <a href="">
                        <img src="${item.url}" alt="">

                    </a>
                </div>
                <div class="goods_info clearfix">
                    <p class="info_btn" style="margin-top: 20px;display=none;" >
                        <a href="">登录查看分销价</a>
                    </p>
                    <p class="price_show">
                    <b>
                    <em class="tprice">¥</em>
                    ${item.price}</b>
                    <span class="jy_price">建议零售价:<em class="q-pri">￥${item.sale}</em></span>
                </p>
                    <p class="goods_name">${item.title} </p>
                    <p class="goods_store">
                        <span class="mix_store">
                            <a href="">${item.feature}</a>
                        </span>
                        <span class="tb_icon">
                            <b class="dxtip" style="float: right">
                                <img src="${item.tubiao}" alt="">
                              </b>
                            <b class="pftip" style="float: right">
                                <img src="${item.icon}" alt="">
                            </b>
                        </span>

                    </p>
                </div>
            </li>`;
            }).join('');
            list.innerHTML = html;
            //2、计算总页码
            let sum = Math.ceil(arr.total / num);
            let aStr = '';
            // console.log(sum);
            for (let i = 0; i < sum; i++) {
                aStr += `<a href="###">${i + 1}</a>`;
            }
            pages.innerHTML = aStr;
            pages.children[ipage - 1].classList.add('active');
            pages.onclick = ev => {
                if (ev.target.tagName == 'A') {
                    // console.log(ev.target.innerHTML);
                    ipage = ev.target.innerHTML;
                    init();
                }
            }

        }


    }
    init();

    search.onclick = function () {
        ipage = 1;
        thingname = text.value.trim();
        init()
    }
   

    sles.onclick = function () {
        ipage = 1;
        if (pricenum) {
            //升序
            sale = 'asc';
        } else {
            //降序
            sale = 'desc';
        }
        init();
    }

    //排序
    pricenum.onclick = function () {
        ipage = 1;
        if (pricenum) {
            //升序
            paixu = 'asc';
        } else {
            //降序
            paixu = 'desc';
        }
        init();
    }

    //点击跳转
    list.onclick = ev => {
        if (ev.target.tagName == 'IMG') {
            let id = ev.target.parentNode.parentNode.parentNode.dataset.id;
            window.open('goods.html?' + id);

        } else if (ev.target.className == 'goods_name') {
            let id = ev.target.parentNode.parentNode.dataset.id;
            window.open('goods.html?' + id);
        } else if (ev.target.tagName == 'A') {
            let id = ev.target.parentNode.parentNode.parentNode.dataset.id;
            window.open('goods.html?' + id);
        }
    }
    // let text = document.getElementById('search_text');
    // let search = document.getElementById('search_button');

    //模糊查询
    // search.onclick = function () {
    //     let texts = text.value.trim();
    //     // thingname = texts
    //     ajax({

    //         type: 'get',
    //         url: '../api/orderby.php',
    //         data: {

    //             thingname,
    //             // text1,
    //             // text2

    //         },
    //         success: str => {
    //             console.log(str);
    //             arr = JSON.parse(str);
    //             // create(str);
    //         }
    //     });
    //     console.log(texts);
    //     init();

    // }


    // $('.main_list  li').mouseenter (function () {
    //     $('.main_list  li').addClass('active');
    //     $('.main_list .hidden_nav').show(); //显示

    // });

    // $('.main_list  li').mouseout (function () {
    //     $('.main_list  li').removeClass('active');     
    //     $('.main_list .hidden_nav ').hide(); //隐藏
    // });

})();