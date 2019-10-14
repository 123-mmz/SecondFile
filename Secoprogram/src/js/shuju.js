var dataitems = document.querySelectorAll('.list-view-enlarge .list-item');
var arr = [];
//[{},{}]
for (var ele of dataitems) {
    var obj = {};
    if (ele.querySelector('.pic img')) {
        obj.url = ele.querySelector('.pic img').src;
    }

    if (ele.querySelector('.price b ')) {
        obj.price = ele.querySelector('.price  b').innerText;
    }

    if (ele.querySelector('.goods-info .jy_price')) {
        obj.sale = ele.querySelector('.goods-info .jy_price').innerText;
    }

    if (ele.querySelector('.name .clr-0866b5')) {
        obj.title = ele.querySelector('.name .clr-0866b5').innerHTML;
    }
    if (ele.querySelector('.clr-999 a')) {
        obj.feature = ele.querySelector('.clr-999 a').innerHTML;
    }
    if (ele.querySelector('.icotip .dxtip img')) {
        obj.tubiao = ele.querySelector('.icotip .dxtip img').src;
    }
    if (ele.querySelector('.icotip .pftip img')) {
        obj.icon = ele.querySelector('.icotip .pftip img').src;
    }
    arr.push(obj);
}