<?php
// Datos de conexión a MySQL
$servername = "localhost"; 
$username   = "root"; 
$password   = ""; 
$database   = "medicina";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    header("Location: comentario.html?status=error");
    exit();
}

// Recibir datos del formulario
$nombre  = $_POST['nombre'] ?? '';
$correo  = $_POST['correo'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Usar prepared statement (seguridad)
$stmt = $conn->prepare("INSERT INTO comentario (nombre, correo, mensaje) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $correo, $mensaje);

if ($stmt->execute()) {
    header("Location: comentario.html?status=ok");
} else {
    header("Location: comentario.html?status=error");
}

$stmt->close();
$conn->close();
?>
