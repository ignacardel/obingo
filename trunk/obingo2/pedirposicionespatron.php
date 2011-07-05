<?php

include "conexion.php";


$idpatron = $_GET['patron'];



$consulta = mysql_query("select * from posicionespatron where patron_id='$idpatron';");


while ($fila = mysql_fetch_array($consulta)) {
    $response[] = $fila['posicion'];
}


echo json_encode($response);

//include "cerrar_conexion.php";
?>