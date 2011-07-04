<?php

//include "conexion.php";


//$filename = 'cantado.txt';
//
//$response = file_get_contents($filename);

$fh = fopen("cantado.txt", "r");
if ($fh) {
    while (!feof($fh)) {
        $contenido = fgets($fh);
        if ($contenido != false) {
            $response[] = $contenido;
        }
    }
    fclose($fh);
}
echo json_encode($response);

//include "cerrar_conexion.php";
?>