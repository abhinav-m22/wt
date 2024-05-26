<?php
// book.php
include 'config.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

if (isset($_GET['flight_id'])) {
    $flight_id = $_GET['flight_id'];

    try {
        $sql = "SELECT seats_available FROM flights WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$flight_id]);
        $flight = $stmt->fetch();

        if ($flight && $flight['seats_available'] > 0) {
            $sql = "INSERT INTO reservations (user_id, flight_id) VALUES (?, ?)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$_SESSION['user_id'], $flight_id]);

            $sql = "UPDATE flights SET seats_available = seats_available - 1 WHERE id = ?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$flight_id]);

            header('Location: reservations.php');
            exit();
        } else {
            echo "No seats available.";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Invalid flight ID.";
}
?>
