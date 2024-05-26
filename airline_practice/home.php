<?php

include "config.php";
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
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
    <h1>Home</h1>
    <h2>Available Flights</h2>
    <?php
    $sql = "Select * from flights";
    $result = mysqli_query($conn, $sql);
    foreach ($result as $flight) {
        echo "<div class='flight'>";
        echo "Flight Number: " . htmlspecialchars($flight['flight_number']) . "<br>";
        echo "Origin: " . htmlspecialchars($flight['origin']) . "<br>";
        echo "Destination: " . htmlspecialchars($flight['destination']) . "<br>";
        echo "Departure Time: " . htmlspecialchars($flight['departure_time']) . "<br>";
        echo "Arrival Time: " . htmlspecialchars($flight['arrival_time']) . "<br>";
        echo "Seats Available: " . htmlspecialchars($flight['seats_available']) . "<br>";
        echo "<a href='book.php?flight_id=" . htmlspecialchars($flight['id']) . "'>Book Now</a>";
        echo "</div>";
    }
    ?>
</body>

</html>