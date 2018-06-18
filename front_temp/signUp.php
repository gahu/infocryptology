<?php
$id=$_POST['id'];
$pw=$_POST['pw'];
$pwc=$_POST['pwc'];
$name=$_POST['name'];
$email=$_POST['email'];

if($pw != $pwc) //비밀번호와 비밀번호 확인 문자열이 맞지 않은 경우
{
  echo "비밀번호를 다시 확인하여 주십시오.";
  echo "<a href=signUp.html>back page</a>";
  exit();
}
if($id == NULL || $pw == NULL || $name == NULL || $email == NULL)
{
  echo "필수항목 모두 입력하여 주십시오";
  echo "<a href=signUp.html>back page</a>";
  exit();
}

$mysqli=mysqli_connect("localhost", "root", "quf235689", "test2");

$check="SELECT *from user_info WHERE userid='$id'";
$result=$mysqli->query($check);
if($result->num_rows==1)
{
  echo "이미 존재하는 id입니다";
  echo "<a href=signUp.html>back page</a>";
  exit();
}

$signup=mysqli_query($mysqli, "INSERT INTO user_info(userid,userpw,name,email) VALUES('$id','$pw','$name','$email')");
if($signup)
{
  echo "sign up success";
}
?>
