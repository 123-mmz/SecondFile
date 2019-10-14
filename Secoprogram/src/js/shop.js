(function () {
    $('#goods_create').on('click', '.add', function () {
        var num = $(this).prev().val();
        num++;
        if (num >= 99) { //临界值设置
            num = 99;
        }
        $(this).prev().val(num);
        $('.sum').html(num);
        $('.c_num').html(num);
        $('.y_num').html(num);

        var indexs = $('.cut').index();
        addSum(num, indexs);
    });

    $('#goods_create').on('click', '.cut', function () {
        // console.log(777);
        var num = $(this).next().val();
        num--;
        if (num <= 0) { //临界值设置
            num = 0;
            $('.cut').addClass('limit');
        }
        $(this).next().eq(0).val(num); //这里要有接口
        $('.sum').html(num);
        $('.c_num').html(num);
        $('.y_num').html(num);
        var indexs = $('.cut').index();
        addSum(num, indexs);
    });

    $('#goods_create').on('input', '.nums', function () {
        // console.log(908);
        var num = $(this).val(); //这里要有接口
        // var kucun = $(this).data('kucun');
        if (num <= 1) { //临界值设置
            num = 1;
        }
        if (num >= 99) { //临界值设置
            num = 99;
        }
        $(this).val(num);
        $('.sum').html(num);
        $('.c_num').html(num);
        $('.y_num').html(num);
        var indexs = $('.cut').index();
        addSum(num, indexs);
    });
    $('#goods_create').on('click', '.selects', function () {
        var selcolor = $(this).text();
        $('.c_color').html(selcolor);

    });

    function addSum(num, indexs) {
        var price = $('.dan_price').eq(indexs).html();
        // console.log(price)
        var total = (num * price).toFixed(2);
        $('.sumprice').eq(indexs).html(total);
    }
    $('#goods_create').on('click', '.ljxd', function () {
        // console.log(777);
        let user = getcookie('username');
        let id = decodeURI(location.search.slice(1));


        $.ajax({
            type: 'get',
            url: '../api/connect.php', //替换成你的接口即可
            data: {
                colors: $('.c_color').text(),
                num: $('.c_num').text(),
                tel: user,
                uid: id
            },
            success: str => {
                
                // console.log(str);
                // resolve(str);
            }
        })
        window.open('car.html');
    });

    


    

})();