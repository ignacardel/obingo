<?php

$conexion = mysql_connect("localhost","root","root") or die ("<center>NO SIRVE</center>");
mysql_select_db("obingo",$conexion);
if(!$conexion)
echo "NO CONECTO :(";

?>
