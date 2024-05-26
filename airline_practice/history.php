<?php
// reservations.php
include 'config.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

$user_id = $_SESSION['user_id'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Your Reservations</title>
</head>
<body>
    <div class="container">
        <h1>Your Reservations</h1>
        <?php
        try {
            $sql = "SELECT flights.flight_number, flights.origin, flights.destination, reservations.reservation_date
                    FROM reservations
                    JOIN flights ON reservations.flight_id = flights.id
                    WHERE reservations.user_id = '$user_id'";

            $reservations = mysqli_query($conn, $sql);

            if (!$reservations) {
                echo "<p>No reservations found.</p>";
            } else {
                foreach ($reservations as $reservation) {
                    echo "Flight Number: " . htmlspecialchars($reservation['flight_number']) . "<br>";
                    echo "Origin: " . htmlspecialchars($reservation['origin']) . "<br>";
                    echo "Destination: " . htmlspecialchars($reservation['destination']) . "<br>";
                    echo "Reservation Date: " . htmlspecialchars($reservation['reservation_date']) . "<br><br>";
                }
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        ?>
    </div>
</body>
</html>
