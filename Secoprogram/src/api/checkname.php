<?php
include 'conn.php';
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '1';
$sql="SELECT * FROM user WHERE tel='$name'";
// var_dump($sql);
$res=$conn->query($sql);
if($res->num_rows){
    echo 'no';
}
else{
    echo 'yes';
}
//关闭数据库
    // $res->close();
    // $conn->close();
?>