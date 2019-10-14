<?php

    include 'conn.php';

    //2.写语句，执行语句
    // $colors = isset($_REQUEST['colors'])?$_REQUEST['colors'] : '';
    $tel = isset($_REQUEST['tel'])?$_REQUEST['tel'] : '';
    // $num = isset($_REQUEST['num'])?$_REQUEST['num'] : '';
    // $uid = isset($_REQUEST['uid'])?$_REQUEST['uid'] : '';
    // /* 执行sql语句查询结果集 */
   $sql= "SELECT * FROM cars,goodlist WHERE cars.id=goodlist.id AND cars.tel='$tel'";
   
    $res = $conn->query($sql);//$res 是一个结果集
    
    // //执行语句
    // if($res->num_rows){
    //   $sql2="select  * from goodlist";
    
    // }else{
    //     $sql2="select * from cars";
    // }
    // $res2 = $conn->query($sql2);//$res 是一个结果集
    $arr = $res->fetch_all(MYSQLI_ASSOC);//数组 [{},{},{}]
        // var_dump($arr);
    
    //     //把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $conn->set_charset('utf8');//设置编码
    //      //3.关闭数据库
    // // $res->close();
    // // $conn->close();