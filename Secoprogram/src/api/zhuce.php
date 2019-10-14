<?php
include 'conn.php';
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
$sql="INSERT INTO user(tel,psw) VALUES ('$name','$password')";
// var_dump($sql);
$res=$conn->query($sql);
// var_dump($res)
if($res){
    echo 'yes';
}
else{
    echo 'no';
}
//关闭数据库
    // $res->close();
    // $conn->close();
?>