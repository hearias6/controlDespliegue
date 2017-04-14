<?php

header("Access-Control-Allow-Origin: *");

require_once('../../class/OperationDB.php');

class Event {}
$events = array();

$sql = "select
DOCUMENT, NAME, LAST_NAME1, LAST_NAME2,
JOB, PHONE, CELL_PHONE, GENDER
from person";

$query = new OperationDB();
$query->conect();
$rows = $query->rows($sql);

while ( $row = $rows -> fetch() ) {
  $e                = new Event();
	$e->document      =$row['DOCUMENT'];
	$e->name          =$row['NAME'];
	$e->last_name1    =$row['LAST_NAME1'];
	$e->last_name2    =$row['LAST_NAME2'];
	$e->job           =$row['JOB'];
	$e->phone         =$row['PHONE'];
	$e->cell_phone    =$row['CELL_PHONE'];
	$e->gender        =$row['GENDER'];
	$events[]         =$e;
}

echo json_encode($events);

?>
