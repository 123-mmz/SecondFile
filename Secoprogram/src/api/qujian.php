<?php
    include 'conn.php';
    //接收参数
    $price1= isset($_REQUEST['price1']) ? $_REQUEST['price1'] : '1';
    $price2= isset($_REQUEST['price2']) ? $_REQUEST['price2'] : '1';

    1.//查询语句
    $sql="SELECT * FROM taobaolist WHERE price BETWEEN  $price1 AND  $price2";

    //2.执行语句
    $res = $conn->query($sql);//结果集
    // var_dump($res);

    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    
     //4.对象转成字符串，转给前端
     echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    
     //防止乱码
     $conn->set_charset('utf8');
     
     //关闭连接，防止资源浪费
     $res->close();
     $conn->close();

?>