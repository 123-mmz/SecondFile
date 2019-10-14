function tabSelect(opt) {

    var defaultOpt = {
        iw: 666,
        ih: 666
    }
    Object.assign(defaultOpt, opt);

    // 找节点
    var select = document.getElementById(defaultOpt.ele);
    //设置尺寸
    select.style.width = defaultOpt.iw + 'px';
    select.style.height = defaultOpt.ih + 'px';
    var abtns = select.getElementsByClassName('abt');
    console.log(abtns.length);
    var acons = select.getElementsByClassName('tab_list');
    // abtns[0].className = 'active';
    // acons[0].style.display = 'block';
    for (var i = 0; i < abtns.length; i++) {
        abtns[i].index = i
        abtns[i].onclick = function () {
            for (var i = 0; i < abtns.length; i++) {
                abtns[i].className = '';
                acons[i].style.display = '';
               
                // acons[i].style.display = '';
            }
            this.className = 'active';
            acons[this.index].style.display = 'block';
        }
    }
}