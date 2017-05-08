<?php

require_once 'ConectionDB.php';

/**
 *
 */
class OperationDB extends ConectionDB
{


  public function rows($sql)
  {
    try {
        $query = $this->conn->prepare($sql);
        $query->execute();
        //return $query->fetchAll();
        return $query;

    }catch (PDOException $e) {
        $e->getMessage();
    }
  }

  public function insert($sql)
  {
    try {
      $resultado = false;
      $query = $this->conn->prepare($sql);
      $row = $query->execute();

      if ($row>0) {
        $resultado = true;
        echo 'ok registro, '.$resultado;
      }else{
        $resultado = false;
        echo 'error registro, '.$resultado;
      }

      return $resultado;

    } catch (PDOException $e) {
      echo $e->getMessage();
    }

  }

}
