<?php
header("content-type:application/json;charset=utf-8");
 $uname=$_REQUEST['uname'];
 $pwd=$_REQUEST['pwd'];
 $link=mysqli_connect('127.0.0.1','root','','user');
 $sql="set names utf8";
 mysqli_query($link,$sql);
 $sql="insert into userlists values(null,'$uname','$pwd')";
 $result=mysqli_query($link,$sql);
 if($result){
 echo '{"code":1,"msg":"注册成功","uid":23}';
 }
 else{
 echo '{"code":-1,"msg":"注册失败用户名密码不能为空"}';
 };