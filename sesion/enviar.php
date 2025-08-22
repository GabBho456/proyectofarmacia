<?php
// Datos de conexión
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "medicina";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    header("Location: iniciar.html?status=error");
    exit();
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$tema = $_POST['tema'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO soporte (nombre, correo, tema, mensaje) 
        VALUES ('$nombre', '$correo', '$tema', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    header("Location: iniciar.html?status=ok");
} else {
    header("Location: iniciar.html?status=error");
}

$conn->close();
?>
