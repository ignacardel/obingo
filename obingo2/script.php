<?php
//include "conexion.php";


	$filename = 'cantar.txt';
	$last = isset($_GET['timestamp']) ? $_GET['timestamp'] : 0;
	$current = filemtime($filename);

	while( $current <= $last) {
		usleep(100000);
		clearstatcache();
		$current = filemtime($filename);
	}
	
	$response = array();
	$response['msg'] = file_get_contents($filename);
	$response['timestamp'] = $current;
	echo json_encode($response);	

//include "cerrar_conexion.php";
?>