<?php

include "config.php";
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

if(isset($_GET['flight_id'])){
    $flight_id = $_GET['flight_id'];
    $sql = "select seats_available from flights where id='$flight_id'";
    $result = mysqli_query($conn, $sql);
    $flight = mysqli_fetch_assoc($result);

    if($flight && $flight['seats_available'] > 0){
        $user_id = $_SESSION['user_id'];
        $insert = "insert into reservations (user_id, flight_id) VALUES('$user_id', '$flight_id')";
        $query = mysqli_query($conn, $insert);

        if($query){
            $update = "update flights set seats_available = seats_available - 1 where id='$flight_id'";
            $query = mysqli_query($conn, $update);

            if($query){
                header("Location: history.php");
                exit();
            }
            else{
                echo "Failed to book flight!";
            }
        }
        else{
            echo "Failed to book flight!";
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>