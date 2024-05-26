<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Admin</h1>
    <h2>Insert a new book</h2>
    <form action="admin.php" method="post">
        <label for="title">Title</label>
        <input type="text" name="title"> <br>
        <label for="author">Author</label>
        <input type="author" name="author"> <br>
        <label for="price">Price</label>
        <input type="price" name="price"> <br>
        <input type="submit" name="insert" value="Insert"> <br>
    </form>

    <h2>Update a book</h2>
    <form action="admin.php" method="post">
        <label for="title">Title</label>
        <input type="text" name="title"> <br>
        <label for="author">Author</label>
        <input type="author" name="author"> <br>
        <label for="price">Price</label>
        <input type="price" name="price"> <br>
        <input type="submit" name="update" value="Update"> <br>
</body>
</html>

<?php
    include "connection.php";
    if(isset($_POST["insert"])){
        $title = $_POST["title"];
        $author = $_POST["author"];
        $price = $_POST["price"];

        $insert = "insert into books(title, author, price) values('$title', '$author', '$price')";
        $res = mysqli_query($conn, $insert);
        if ($res) {
            echo "Book Registered Successfully";
        } else {
            echo "Book Registration Failed";
        }
    }
    elseif(isset($_POST["update"])){
        $title = $_POST["title"];
        $author = $_POST["author"];
        $price = $_POST["price"];

        // Add optional parameters as well
        $update = "update books set ";
        if (!empty($author)) {
            $update .= "author='$author', ";
        }
        if (!empty($price)) {
            $update .= "price='$price', ";
        }
        $update = rtrim($update, ", ");
        $update .= " where title='$title'";
        $res = mysqli_query($conn, $update);
        if ($res) {
            echo "Book Updated Successfully";
        } else {
            echo "Book Updation Failed";
        }
    }
?>