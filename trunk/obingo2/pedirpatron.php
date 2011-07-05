<?php

include "conexion.php";


$filename = 'patron.txt';

$idpatron = file_get_contents($filename);


$consulta = mysql_query("select * from patron where id='$idpatron';");


$fila = mysql_fetch_array($consulta);

$response['nombre'] = $fila['nombre'];
$response['id'] = $fila['id'];



echo json_encode($response);

//include "cerrar_conexion.php";
?>