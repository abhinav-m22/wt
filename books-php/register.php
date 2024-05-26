<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Register</h1>
    <form method="POST">
        <label for="username">Username</label>
        <input type="text" name="username"> <br>
        <label for="passowrd">Password</label>
        <input type="password" name="password"> <br>
        <input type="submit" name="register" value="Register">
    </form>
</body>

</html>

<?php
include "connection.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $passwd = password_hash($password, PASSWORD_DEFAULT);

    $query = "insert into users(username,password) values('$username','$passwd')";
    $result = mysqli_query($conn, $query);
    if ($result) {
        echo "User Registered Successfully";
    } else {
        echo "User Registration Failed";
    }
}

?>