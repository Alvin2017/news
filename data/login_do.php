<?php
$uname=$_REQUEST['uname'];
$pwd=$_REQUEST['pwd'];
$link=mysqli_connect("127.0.0.1","root","","user");
$sql="set names utf8;";
mysqli_query($link,$sql);
$sql="select * from userlists where uname='$uname' and pwd='$pwd'";
$result=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($result);
if($row!=null){
	echo "suc";
}else{
	echo "err";
}