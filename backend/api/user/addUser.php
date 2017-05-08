<?php

/*
header("Access-Control-Allow-Origin: *");
require_once('../../class/OperationDB.php');

$json = file_get_contents('php://input');
$params = json_decode($json);

$user = $params->user;
$pass = $params->pass;
$role = $params->role;

//echo 'user: '.$user.' <br/> pass: '.$pass.' <br/> role: '.$role.'<br/>';

$sql = "insert into user (NAME, PASS, ROLE_NAME) values ('$user', '$pass', '$role')";

echo json_encode($events);

$query = new OperationDB();
$query->conect();
$rows = $query->insert($sql);

//echo $rows;


class Result {}

$response = new Result();
$response->result = 'OK';
$response->message = 'Created with id: '.$db->lastInsertId();
$response->id = $db->lastInsertId();

header('Content-Type: application/json');
echo json_encode($response);
*/
