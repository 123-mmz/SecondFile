function topBu(opt) {
    var defaultOpt = {
        tops:666

    }
    Object.assign(defaultOpt, opt);

    var top = document.getElementById(defaultOpt.ele);
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= defaultOpt.tops) {
            top.style.display = 'block';

        } else {
            top.style.display = 'none';
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