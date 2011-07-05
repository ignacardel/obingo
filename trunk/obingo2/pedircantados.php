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
            $trimmed = trim($contenido);
            $response[] = $trimmed;
        }
    }
    fclose($fh);
}else
    $response['msg']='pausa';

echo json_encode($response);

//include "cerrar_conexion.php";
?>