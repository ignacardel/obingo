<?php

$opcion = $_GET['opcion'];

switch ($opcion) {
    case 1: //pausar
        $file = 'pausa.txt';
        $handle = fopen($file, 'w');
        fwrite($handle, '1');
        fclose($handle);
        break;
    case 2: //cantar bingo
        $file = 'bingo.txt';
        $handle = fopen($file, 'w');
        fwrite($handle, '1');
        fclose($handle);
        break;
    case 3: //despausar
        $file = 'pausa.txt';
        $handle = fopen($file, 'w');
        fwrite($handle, '0');
        fclose($handle);
        break;
}

exit;
?>