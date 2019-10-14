

(function () {
    let tel = document.getElementById('tel');
    let psw = document.getElementById('pasw');
    let inf1 = document.getElementById('inf1');
    let inf2 = document.getElementById('inf2');
    let btn = document.getElementById('reg_btn');
    let check = document.getElementById('check');
    var yanz = document.getElementById('yanz');
    var results = document.getElementById('results');
    let num = document.getElementById('num');
    let isok = false;
    var istrue1 = false;
    var istrue2 = false;
    var istrue3 = false;
    $('.icon').click(function () {
        // $("img").attr("src");
        $('input').attr('text');
    })
    tel.onblur = () => {
        let val = tel.value.trim();
        let reg = /^1[3-9]\d{9}$/;
        if (val) {
            let isyes = reg.test(val);
            if (isyes) {
                //正则验证通过
                inf1.innerHTML = '√通过信息';
                ajax({
                    type: 'get',
                    url: '../api/checkname.php',
                    data: {
                        name: tel.value.trim()

                    },
                    success: str => {
                        // console.log(str)
                        if (str == 'yes') {
                            inf1.innerHTML = '可以注册';
                            inf1.style.color = '#58bc58';
                            // isok = true;
                            istrue3 = true;
                            $('#inf1').addClass('true');


                        } else {
                            inf1.innerHTML = '不可以注册';
                            inf1.style.color = 'red';
                            $('#inf1').addClass('fal');
                            // isok = false;
                            istrue3 = false;

                        }

                    }


                })

            } else {
                inf1.innerHTML = '请填写正确的手机号码！';
                inf1.style.color = 'red';
                // this.value = '';
                // this.focus();
                $('#inf1').addClass('fal');

                istrue3 = false;
            }
        } else {
            inf1.innerHTML = '请填写信息';
            inf1.style.color = 'red';
            $('#inf1').addClass('fal');


        }
    }
    psw.onblur = () => {
        let val = psw.value.trim();
        let reg = /^\S{8,20}$/;
        if (val) {
            let isyes = reg.test(val);
            if (isyes) {
                //正则验证通过
                inf2.innerHTML = '√通过信息';
                inf2.style.color = '#58bc58';
                $('#inf2').addClass('true');

                istrue2 = true;
            } else {
                inf2.innerHTML = '请密码只能由8-20个字母、数字、或符号组成！';
                // inf2.style.color = 'red';
                $('#inf2').addClass('fal');
                istrue2 = false;
            }
        } else {
            inf2.innerHTML = '请填写信息';
            inf2.style.color = 'red';
            $('#inf2').addClass('fal');


            strue2 = false;
        }
    }

    yanz.innerHTML = random(4);
    yanz.style.backgroundColor = randomcolor();
    results.onclick = function () {
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
            inf3.innerHTML = '恭喜您！验证通过！';
            inf3.style.color = '#58bc58';
            $('#inf3').addClass('true');
            istrue4 = true;
        } else {
            inf3.innerHTML = 'Sorry！验证失败'
            inf3.style.color = 'red';
            $('#inf3').addClass('fal');

            istrue4 = false;

        }
    }


    btn.onclick = () => {
        if (istrue3 && istrue2 && istrue4 && check.checked) {
            ajax({
                type: 'post',
                url: '../api/zhuce.php',
                data: {
                    name: tel.value.trim() * 1,
                    password: psw.value.trim()
                },

                success: str => {
                    console.log(str);

                    if (str == 'yes') {
                        alert('注册成功！');
                        location.href = 'login.html?name=' + tel.value.trim();
                    } else {
                        alert('注册失败！');

                    }
                }

            })


        }

    }

})();