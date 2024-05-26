<?php
include "connection.php";

$fetch = "select * from books";
$res = mysqli_query($conn, $fetch);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
        }
        h1 {
            color: #333;
        }
        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
            width: 100%;
            max-width: 1200px;
        }
        .card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .card h2 {
            margin: 0 0 10px;
            font-size: 1.5em;
            color: #333;
        }
        .card p {
            margin: 5px 0;
            color: #666;
        }
        .card .price {
            font-size: 1.2em;
            color: #e74c3c;
        }
    </style>
</head>

<body>
    <h1>Home</h1>
    <div class="card-container">
        <?php foreach ($res as $row) : ?>
            <div class="card">
                <h2><?php echo ($row["title"]); ?></h2>
                <p><?php echo ($row["author"]); ?></p>
                <p class="price">$<?php echo ($row["price"]); ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</body>

</html>
