function guangGao(opt) {
    var defaultOpt = {
        iw: 300,
        ih: 300,

    }
    Object.assign(defaultOpt, opt);

    var box = document.getElementById(defaultOpt.ele);
    console.log(box);
    box.style.width = defaultOpt.iw + 'px';
    box.style.height = defaultOpt.ih + 'px';

    box.onmouseover = function () {
        startMove(box, {
            'right': 0
        });
    }
    box.onmouseout = function () {
        startMove(box, {
            'right': -170
        });
    }

}

function topBu(opt) {
    var defaultOpt = {
        tops: 666

    }
    Object.assign(defaultOpt, opt);

    var top = document.getElementById(defaultOpt.ele);
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= defaultOpt.tops) {
            top.style.display = 'block';
            top.style.className = '.totop';

        } else {
            top.style.className = '.ggtop';
        }

        top.onclick = function () {
            var scrollTop = window.scrollY;
            var timer = setInterval(function () {
                scrollTop -= 40;
                if (scrollTop <= 0) {
                    clearInterval(timer);
                }

                window.scrollTo(0, scrollTop);
            }, 30);




        }

    }
}

    (function () {   
        $('.showlist').mouseenter(function () {         
                $('.showlist').show();//显示     
        });        
        $('.showlist').mouseleave(function () {   
                $('.list_box ').hide();//隐藏             
        });
})();

