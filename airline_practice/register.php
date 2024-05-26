<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Register</h1>
    <form action="register.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"><br>
        <label for="email">Email</label>
        <input type="email" id="email" name="email"><br>
        <input type="submit" name="register" value="Register">
    </form>
</body>
</html>

<?php
    include "config.php";

    if(isset($_POST["register"])){
        $username = $_POST["username"];
        $password = $_POST["password"];
        $email = $_POST["email"];

        $hashedpsswd = password_hash($password, PASSWORD_BCRYPT);

        // Check if username is present or not
        $check = "SELECT * FROM users WHERE username = '$username'";
        $result = mysqli_query($conn, $check);
        $num = mysqli_num_rows($result);

        if($num != 0){
            echo "Username already exists!";
        }

        else{
            $insert = "INSERT INTO users (username, password, email) VALUES ('$username', '$hashedpsswd', '$email')";
            $query = mysqli_query($conn, $insert);

            if($query){
                header("Location: login.php");
            }
            else{
                echo "Failed to register!";
            }
        }
    }

?>