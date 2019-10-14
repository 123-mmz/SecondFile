<?php
    include 'conn.php';
    $paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';
    include 'conn.php';
    //接收参数
    $thingname = isset($_REQUEST['thingname']) ? $_REQUEST['thingname'] : '1';
//    echo $thingname;

    1.//查询语句
    $sql="SELECT * FROM taobaolist WHERE names LIKE '%$thingname%' ";
    // //2.执行语句
    $res = $conn->query($sql);//结果集
    // var_dump($res);

    // //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // // var_dump($arr);
    //  //4.对象转成字符串，转给前端
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    
    // //  //防止乱码
     $conn->set_charset('utf8');
     
     //关闭连接，防止资源浪费
    //  $res->close();
    //  $conn->close();