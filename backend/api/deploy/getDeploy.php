<?php

header("Access-Control-Allow-Origin: *");

require_once('../../class/OperationDB.php');

class Event {}
$events = array();

$sql = "select
ID_DEPLOY, DEPLOY_DATE, DEPLOY_HOUR, FK_CLIENT, FK_PERSON 
from deploy";

$query = new OperationDB();
$query->conect();
$rows = $query->rows($sql);

while ( $row = $rows -> fetch() ) {
  $e                 = new Event();
	$e->id_deploy      =$row['ID_DEPLOY'];
	$e->deploy_date    =$row['DEPLOY_DATE'];
	$e->deploy_hour    =$row['DEPLOY_HOUR'];
	$e->fk_client      =$row['FK_CLIENT'];
	$e->fk_person      =$row['FK_PERSON'];

	$events[]          =$e;
}

echo json_encode($events);

?>
