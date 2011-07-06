<?php

extract($_GET);

switch ($opcion) {
    case 1: //tiempo entre numeros
        $file = 'tnumeros.txt';
        $response = file_get_contents($file);
        break;
    case 2: //tiempo entre partidas
        $file = 'tpartida.txt';
        $response = file_get_contents($file);
        break;
    case 3: //cantidad de numeros
        $file = 'cnumero.txt';
        $response = file_get_contents($file);
        break;
}

echo json_encode($response);
?>