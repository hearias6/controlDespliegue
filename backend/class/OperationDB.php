<?php

require_once 'ConectionDB.php';

/**
 *
 */
class OperationDB extends ConectionDB
{

  /**
   * devuelve un arreglo de una consulta.
   * @param type var Description
   * @return return type
   */
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

}
