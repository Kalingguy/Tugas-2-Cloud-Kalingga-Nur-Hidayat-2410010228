<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

<h1>Tic Tac Toe</h1>

<p class="status">
Giliran : X
</p>

<div class="board">

<?php
for($i=0;$i<9;$i++){
    echo "<div class='cell' data-index='$i'></div>";
}
?>

</div>

<button onclick="resetGame()">
Main Lagi
</button>

</div>

<script src="script.js"></script>

</body>
</html>