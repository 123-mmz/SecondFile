function randomYanz(opt) {
    var defaultOpt = {


    }
    Object.assign(defaultOpt, opt);
    var num = document.getElementById(defaultOpt.ele);
    var yanz = document.getElementById('yanz');
    var btn = document.getElementById('results');
    var show = document.getElementById('inf3');
   

    function random(n) {
        var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKlMNOPQRSTUVWXYZ1234567890';
        var html = '';
        for (i = 0; i < n; i++) {
            var index = parseInt(Math.random() * str.length);
            var num = '<span>' + str[index] + '</span>';
            html += num;
        }
        return html;

    }

    function randomcolor() {
        var str = '0123456789abcdef';
        var color = ' #';
        for (i = 0; i < 6; i++) {
            var index = parseInt(Math.random() * 16);
            color += str[index];

        }
        return color;
    }



    yanz.innerHTML = random(4);
    yanz.style.backgroundColor = randomcolor();
    btn.onclick = function () {
        yanz.innerHTML = random(4);
        yanz.style.backgroundColor = randomcolor();
        yanz.style.color = randomcolor();


    }
    let istrue4 = false;
    num.onblur = function () {
       
        var n1 = num.value;
        var n2 = yanz.innerText;
        // console.log(n1, n2);
        if (n1 == n2) {
            show.innerHTML = '恭喜您！验证通过！';
            show.style.color = '#58bc58';
            istrue4 = true;


        } else {
            show.innerHTML = 'Sorry！验证失败'
            show.style.color = 'red';
            istrue4= false;

        }
    }
}