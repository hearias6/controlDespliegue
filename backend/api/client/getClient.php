<?php

header("Access-Control-Allow-Origin: *");

require_once('../../class/OperationDB.php');

class Event {}
$events = array();

$sql = "select
ID_CLIENT, NIT, NAME, DESCRIPTION
from client";

$query = new OperationDB();
$query->conect();
$rows = $query->rows($sql);

while ( $row = $rows -> fetch() ) {
  $e              = new Event();
  $e->id_client   =$row['ID_CLIENT'];
	$e->nit         =$row['NIT'];
	$e->name        =$row['NAME'];
	$e->description =$row['DESCRIPTION'];
	$events[]       =$e;
}

echo json_encode($events);

?>
