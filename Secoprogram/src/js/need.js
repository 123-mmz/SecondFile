(function () {

    //首页：退出功能
    let welcome = document.getElementById('wel');
    let deng = document.getElementById('deng');
    let zhu = document.getElementById('zhu');
    let header = document.getElementById('header');
    let cont1 = document.getElementById('hello');
    let cont2 = document.getElementById('cont2');

    // let data = decodeURI(location.search.slice(1));//把转码的中文转回来

    function undate() {
        let data = getcookie('username');
        if (data) {
            //登陆的
            deng.innerHTML = '"' + data + '"' + '欢迎您回来！';
            zhu.innerHTML = '<a href="###" class="quit">退出</a>'
            welcome.innerHTML = '多商网首页';
            cont1.innerHTML = 'Hi,' + data + '！';
            // cont2.innerHTML = '欢迎您回来！';
        } else {
            welcome.innerHTML = '欢迎来到多商网<a href="###" class="enter">登陆</a>';
        }
    }

    undate();


    header.onclick = ev => {
        if (ev.target.className == 'quit') {
            console.log(quit)
            //退出
            alert('退出成功');
            removecookie('username');
            removecookie('url');
            // console.log(getcookie('username'));
            welcome.innerHTML = '欢迎你访问我们的网站。<a href="###" class="enter">登陆</a>';
        } else if (ev.target.innerHTML == '登陆') {
            location.href = '../html/ligin.html';
        }
        undate();
    }



})();