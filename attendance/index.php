<?php
require 'config.php';
session_start();

if ($_SESSION['role'] !== 'teacher') {
    header('Location: login.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $date = $_POST['date'];
    foreach ($_POST['attendance'] as $user_id => $status) {
        $stmt = $conn->prepare("INSERT INTO attendance (user_id, date, status) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE status=?");
        $stmt->bind_param("isss", $user_id, $date, $status, $status);
        $stmt->execute();
    }
    echo "Attendance marked.";
}

$students = $conn->query("SELECT id, username FROM users WHERE role='student'");
?>

<form method="post" action="">
    Date: <input type="date" name="date" required><br>
    <?php while ($row = $students->fetch_assoc()): ?>
        <input type="checkbox" name="attendance[<?php echo $row['id']; ?>]" value="present"> <?php echo $row['username']; ?><br>
    <?php endwhile; ?>
    <button type="submit">Submit Attendance</button>
</form>
