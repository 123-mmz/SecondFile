var dataitems = document.querySelectorAll('.goodsindex_f .goodsindex_wrap');
var arr = [];
//[{},{}]
for (var ele of dataitems) {
    var obj = {};
    if (ele.querySelector('.tb-booth img')) {
        obj.url = ele.querySelector('.tb-booth img').src;
    }

    if (ele.querySelector('.tb-thumb img')) {
        obj.mixurl = ele.querySelector('.tb-thumb img').src;
    }

    if (ele.querySelector('.amount_2 .value_bot ')) {
        obj.price = ele.querySelector('.amount_2 .value_bot ').innerText;
    }

    if (ele.querySelector('.fb_pb b')) {
        obj.sale = ele.querySelector('.fb_pb b').innerText;
    }

    if (ele.querySelector('.title .goods-name')) {
        obj.title = ele.querySelector('.title .goods-name').innerHTML;
    }
    if (ele.querySelector('.fc_pb  em')) {
        obj.mai = ele.querySelector('.fc_pb  em').innerHTML;
    }
    if (ele.querySelector('fc_pa input')) {
        obj.huoid = ele.querySelector('fc_pa input').innerText;
    }
    
    if (ele.querySelector('.sku_lia  b')) {
        obj.six = ele.querySelector('.sku_lia  b').innerHTML;
    }
    if (ele.querySelector('.sku_lib b')) {
        obj.kucun = ele.querySelector('.sku_lib b').innerHTML;
    }
    if (ele.querySelector('.sku_lid  b')) {
        obj.price = ele.querySelector('.sku_lid  b').innerHTML;
    }


    arr.push(obj);
}