<?php

include "conexion.php";


extract ($_GET);


$consulta=mysql_query("insert into usuario values (NULL,'$nombres','$apellidos','$email','$direccion','$telf');");


//include "cerrar_conexion.php";
?>