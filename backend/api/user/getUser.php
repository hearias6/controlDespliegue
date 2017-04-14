<?php

header("Access-Control-Allow-Origin: *");

require_once('../../class/OperationDB.php');

class Event {}
$events = array();

$sql = "select NAME, PASS, ROLE_NAME from user;";

$query = new OperationDB();
$query->conect();
$rows = $query->rows($sql);

while ( $row = $rows -> fetch() ) {
  $e            = new Event();
	$e->name      =$row['NAME'];
	$e->pass      =$row['PASS'];
	$e->role_name =$row['ROLE_NAME'];
  $events[]     = $e;
}

echo json_encode($events);
