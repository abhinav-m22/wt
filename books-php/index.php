<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Login</h1>
    <form action="index.php" method="post">
        <label for="username">Username</label>
        <input type="text" name="username"> <br>
        <label for="passowrd">Password</label>
        <input type="password" name="password"> <br>
        <input type="submit" name="login" value="Login"> <br>
        <a type="submit" value="Register" href="register.php">Regoster</a>
    </form>
</body>

</html>
<?php
include "connection.php";

if (isset($_POST["login"])) {

    $username = $_POST["username"];
    $password = $_POST["password"];

    if($username == 'admin' && $password == 'admin'){
        header("Location: admin.php");
    }

    $passwd = password_hash($password, PASSWORD_DEFAULT);

    $query = "select * from users where username='$username'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $decrypt = password_verify($password, $row['password']);
        if ($decrypt) {
            header("Location: home.php");
        } else {
            echo $passwd . "<br>"; 
            echo $row["password"]  . "<br>";
            echo "Login Faillllllllll!!";
        }
    } else {
        echo "User Not Registered";
    }
}
?>