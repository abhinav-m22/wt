<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Login</h1>
    <form action="login.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"><br>
        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>

<?php
    include "config.php";
    session_start();

    if(isset($_POST['login'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

        $check = "select * from users where username='$username'";
        $res = mysqli_query($conn, $check);
        $num = mysqli_num_rows($res);

        if($num == 1){
            $row = mysqli_fetch_assoc($res);
            if(password_verify($password, $row['password'])){
                $_SESSION['user_id'] = $row['id'];
                header("Location: home.php");
                exit();
            }
            else{
                echo "Invalid password!";
            }
        }
    }
?>