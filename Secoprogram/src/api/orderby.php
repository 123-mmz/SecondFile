<?php
    include 'conn.php';
 
    $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '5';
    $paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';
    $thingname = isset($_REQUEST['thingname']) ? $_REQUEST['thingname'] : '';
    $sale = isset($_REQUEST['sale']) ? $_REQUEST['sale'] : '';
    // $text1 = isset($_REQUEST['text1']) ? $_REQUEST['text1'] : '';
    // $text2 = isset($_REQUEST['text2']) ? $_REQUEST['text2'] : '';
    // $thingname= isset($_REQUEST['thingname']) ? $_REQUEST['thingname'] : '1';
    // echo $thingname;
    // echo $page;
    //1.写查询语句
    $index = ($page - 1) * $num;
//     if($paixu) {
//         $sql = "SELECT * FROM goodlist ORDER BY price $paixu LIMIT $index,$num ";
//     }else{
//         $sql = "SELECT * FROM goodlist LIMIT $index,$num";
   
//     if($thingname){
//       $sql="SELECT * FROM goodlist WHERE title LIKE '%$thingname%' ";

//     }
//     else{
//         $sql = "SELECT * FROM goodlist LIMIT $index,$num";
//     }
    
// }
if($paixu) {

    $sql = "SELECT * FROM goodlist ORDER BY price $paixu LIMIT $index,$num ";
    if($thingname){
        $sql="SELECT * FROM goodlist WHERE title LIKE '%$thingname%'  LIMIT $index,$num";
      
      }
      if($sale){
        $sql="SELECT * FROM goodlist ORDER BY mai $sale LIMIT $index,$num ";
      
      }

}

else{
    $sql = "SELECT * FROM goodlist LIMIT $index,$num";
}

// else{
//     $sql = "SELECT * FROM goodlist LIMIT $index,$num";
// }

  // if($text1 && $text2){
    //     $sql = "SELECT * FROM taobaolist WHERE price  BETWEEN '$text1' AND  '$text2'";
    // }else{
    //     $sql = "SELECT * FROM taobaolist LIMIT $index,$num";
     
    // var_dump($text1);


    //2.执行语句
    $res = $conn->query($sql);
    // var_dump($res);
    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

    //语句：查询整个表的
    $sql2 = 'SELECT * FROM goodlist';
    $res2 = $conn->query($sql2);
    // var_dump($res2);
    // echo $res2->num_rows;
    // $sql3="SELECT * FROM taobaolist WHERE names LIKE '%$thingname%' ";
    // //2.执行语句
    // $res3 = $conn->query($sql3);//结果集
    // var_dump($res3);

    //3.提取数据
    // $arr3 = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr3);
     //4.对象转成字符串，转给前端
    //  echo json_encode($arr1,JSON_UNESCAPED_UNICODE);


    //4.把数组转成字符串，echo给前端
    // echo json_encode($arr);

    $data = array(//制作关联数组，就可以一次性传多个值给前端
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num
        // 'thingname' => $arr3
       
    );

    echo json_encode($data);

    
    //5.关闭数据库
    // $res->close();
    // $conn->close();
?>