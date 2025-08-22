<?php
header('Content-Type: application/json; charset=utf-8');

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "medicina";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["exito" => false, "mensaje" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $producto     = $_POST['producto'] ?? '';
    $monto        = $_POST['monto'] ?? '';
    $metodo_pago  = $_POST['metodo_pago'] ?? '';
    $ccname       = $_POST['ccname'] ?? '';
    $ccnumber     = $_POST['ccnumber'] ?? '';
    $ccexp        = $_POST['ccexp'] ?? '';
    $cccvv        = $_POST['cccvv'] ?? '';
    $ppemail      = $_POST['ppemail'] ?? '';
    $bankname     = $_POST['bankname'] ?? '';
    $bankiban     = $_POST['bankiban'] ?? '';
    $bankref      = $_POST['bankref'] ?? '';
    $coin         = $_POST['coin'] ?? '';
    $wallet       = $_POST['wallet'] ?? '';

    $sql = "INSERT INTO pagos (
        producto, monto, metodo_pago, ccname, ccnumber, ccexp, cccvv,
        ppemail, bankname, bankiban, bankref, coin, wallet, fecha
    ) VALUES (
        '$producto','$monto','$metodo_pago','$ccname','$ccnumber','$ccexp','$cccvv',
        '$ppemail','$bankname','$bankiban','$bankref','$coin','$wallet', NOW()
    )";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["exito" => true, "mensaje" => "✅ Datos guardados exitosamente"]);
    } else {
        echo json_encode(["exito" => false, "mensaje" => "❌ Error al guardar: " . $conn->error]);
    }
}

$conn->close();
