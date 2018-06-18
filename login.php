<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <?php
    $id = $_GET["id"];
    $password = $_GET["password"];
    if($id == "gahu" && $password == "1111") {
      echo "환영합니다";
    } else {
      echo "아이디 혹은 패스워드가 틀렸습니다.";
    }
  ?>
</body>
</html>
