<?php

//include "conexion.php";


$filename = 'cantado.txt';

$response = file_get_contents($filename);
echo json_encode($response);

//include "cerrar_conexion.php";
?>