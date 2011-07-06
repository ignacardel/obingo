<?php

extract ($_GET);

switch ($opcion) {
    case 1: //tiempo entre numeros
        $file = 'tnumeros.txt';
        $handle = fopen($file, 'w');
        fwrite($handle, $valor);
        fclose($handle);
        break;
    case 2: //tiempo entre partidas
        $file = 'tpartida.txt';
        $handle = fopen($file, 'w');
        fwrite($handle, $valor);
        fclose($handle);
        break;
    case 3: //cantidad de numeros
        $file = 'cnumero.txt';
        $handle = fopen($file, 'w');
        fwrite($handle, $valor);
        fclose($handle);
        break;
}

?>