<?php

include "conexion.php";


extract ($_GET);

$array = explode(",", $posiciones);

$consulta=mysql_query("insert into patron values (NULL,'$nombre');");

$consulta2=mysql_query("SELECT MAX(id) as ultimopatron from patron");

$resultado=mysql_fetch_array($consulta2);

foreach ($array as $posicion){
   $consulta3=mysql_query("INSERT INTO posicionespatron VALUES (NULL,'$resultado[ultimopatron]', '$posicion')");
}

//include "cerrar_conexion.php";
?>