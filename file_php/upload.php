<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['fileToUpload']) && $_FILES['fileToUpload']['error'] == 0) {
        $uploadedFile = $_FILES['fileToUpload']['tmp_name'];
        $fileContents = file_get_contents($uploadedFile);
        
        // Display the file contents
        echo '<div class="container">';
        echo '<h2>File Contents</h2>';
        echo '<pre>' . htmlspecialchars($fileContents) . '</pre>';
        echo '</div>';
    } else {
        echo '<div class="container">';
        echo '<h2>Error</h2>';
        echo '<p>There was an error uploading your file.</p>';
        echo '</div>';
    }
}
?>
