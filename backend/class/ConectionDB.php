<?php

/**
 * Conexion con la base de datos.
 */

class ConectionDB
{

  const TYPE_DATABASE = 'mysql';
  const DATABASE = 'controldespliege';
  const HOST = 'localhost';
  const PORT = '';
  const USER = 'root';
  const PASS = '';

  protected $conn;

  function __construct()
  {

  }

  public function conect()
  {
    try{
        $this->conn = new PDO(self::TYPE_DATABASE.':host='.self::HOST.';dbname='.self::DATABASE, self::USER, self::PASS);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "SUCCESS CONECT <br/>";
    }catch(PDOException $e){
        echo "ERROR CONECT: " . $e->getMessage();
    }
  }

  public function disconect()
  {
    try {
      $this->conn = null;
    } catch (PDOException $e) {
        echo "ERROR DISCONECT: ".$e->getMessage();
    }

  }


}
