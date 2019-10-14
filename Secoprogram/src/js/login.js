(function () {
    $('#footer').load('footer.html', function () {});
})();
// topBu({
//     ele: 'tops',
//     tops: 300
// })
// guangGao({
//     ele: 'kefu',
//     iw: 210,
//     ih: 445,

// });
(function () {
    let user = document.getElementById('user');
    let psw = document.getElementById('pass');
    let inf1 = document.getElementById('inf1');
    let inf2 = document.getElementById('inf2');
    let btn = document.getElementById('loginbtn');
    let num = document.getElementById('yanzs');
    let yanz = document.getElementById('yanz');

    yanz.innerHTML = random(4);
    yanz.style.backgroundColor = randomcolor();
    yanz.onclick = function () {
        yanz.innerHTML = random(4);
        yanz.style.backgroundColor = randomcolor();
        yanz.style.color = randomcolor();
    }
    let istrue4 = false;
    num.onblur = function () {
        var n1 = num.value.trim();
        var n2 = yanz.innerText;
        console.log(n1, n2);
        if (n1 == n2) {
            istrue4 = true;
        } else {
            istrue4 = false;
            alert('验证失败错误！')

        }
    }
    // console.log(btn)
    btn.onclick = () => {
        let name = user.value.trim();
        let password = psw.value.trim();
        let dengl = getcookie('username');
        if (dengl) {
            alert('你已经登录过了');
        } else {
            ajax({
                type: 'post',
                url: '../api/denglu.php',
                data: {
                    name,
                    password
                },
                success: str => {
                    // console.log(str);
                    if (str == 'yes') {
                        alert('登录成功！');
                        create();
                        let url = getcookie('url');
                        if (url) {
                            location.href = url;

                        } else {
                            location.href = '../shouye.html';
                        }

                    }
                }

            })
        }
    }

    function create() {
        setcookie('username', user.value.trim(), 7);
    }

})();