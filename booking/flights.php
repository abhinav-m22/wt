<?php
// flights.php
include 'config.php';
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
    <link rel="stylesheet" href="styles.css">
    <title>Available Flights</title>
</head>
<body>
    <div class="container">
        <h1>Available Flights</h1>
        <?php
        try {
            $sql = "SELECT * FROM flights WHERE seats_available > 0";
            $stmt = $pdo->query($sql);
            $flights = $stmt->fetchAll();

            if (!$flights) {
                echo "<p>No available flights.</p>";
            } else {
                foreach ($flights as $flight) {
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
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        ?>
    </div>
</body>
</html>
