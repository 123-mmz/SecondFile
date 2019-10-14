<?php
include 'conn.php';
$page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '5';
$paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';
$thingname = isset($_REQUEST['thingname']) ? $_REQUEST['thingname'] : '';
$sale = isset($_REQUEST['sale']) ? $_REQUEST['sale'] : '';
$index = ($page - 1) * $num;
// 1.//查询语句
$sql="SELECT * FROM taobaolist WHERE names LIKE '%$thingname%' ";
// // //2.执行语句
$res = $conn->query($sql);//结果集
if($thingname){
    $sql="SELECT * FROM goodlist WHERE title LIKE '%$thingname%'  LIMIT $index,$num";
  
  }
  else{
    $sql = "SELECT * FROM goodlist LIMIT $index,$num";
}
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

    //4.把数组转成字符串，echo给前端
    // echo json_encode($arr);

    $data = array(//制作关联数组，就可以一次性传多个值给前端
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num
    );

    echo json_encode($data);
//  //4.对象转成字符串，转给前端
echo json_encode($arr,JSON_UNESCAPED_UNICODE);

// //  //防止乱码
 $conn->set_charset('utf8');
 
 //关闭连接，防止资源浪费
//  $res->close();
//  $conn->close();

?>