<?php
include 'conn.php';
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '11';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '22';

    //sql语句
    $sql = "SELECT * FROM user WHERE tel='$name' AND psw='$password'";

    //执行语句
    $res = $conn->query($sql);

    // var_dump($res);
   
    if($res->num_rows) {
        //登陆成功
        echo 'yes';
    }else{
        //登陆失败
        echo 'no';
    }

// }
// if($res->num_rows) {
//     /* 存在，可以登录 */
//     echo('yes');
// }else {
//     $sql2 = "SELECT * FROM user WHERE tel = '$name'";
//     $res2 = $conn->query($sql2);
//     if($res2->num_rows) {
//         /* 账号存在,密码错误 */
//         echo('pasw false');
//     }else{
//         /* 账号错误 */
//         echo('tel false');
//     }
// //关闭数据库
//     // $res->close();
//     // $conn->close();
?>