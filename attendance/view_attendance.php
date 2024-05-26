<?php
require 'config.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$user_id = $_SESSION['user_id'];
$role = $_SESSION['role'];

if ($role == 'teacher') {
    $stmt = $conn->prepare("SELECT u.username, a.date, a.status FROM attendance a JOIN users u ON a.user_id = u.id");
} else {
    $stmt = $conn->prepare("SELECT date, status FROM attendance WHERE user_id = ?");
    $stmt->bind_param("i", $user_id);
}

$stmt->execute();
$result = $stmt->get_result();
?>

<table border="1">
    <tr>
        <?php if ($role == 'teacher'): ?>
            <th>Student</th>
        <?php endif; ?>
        <th>Date</th>
        <th>Status</th>
    </tr>
    <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <?php if ($role == 'teacher'): ?>
                <td><?php echo $row['username']; ?></td>
            <?php endif; ?>
            <td><?php echo $row['date']; ?></td>
            <td><?php echo $row['status']; ?></td>
        </tr>
    <?php endwhile; ?>
</table>
