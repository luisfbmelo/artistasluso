<?php 

namespace App\Config;

use PDO;

class PdoConnection{
	public static $connection;

	public function __construct(){}

    /**
     * Gets the value of connection and sets if doesn't exist.
     *
     * @return mixed
     */
    public static function getConnection()
    {
    	if (!self::$connection){
    		self::_setConnection(new PDO('mysql:host=localhost;dbname=c5filhos', "root", ""));
    	}
        return self::$connection;
    }


    /**
     * Sets the value of connection.
     *
     * @param mixed $connection the connection
     *
     * @return boolean
     */
    public static function _setConnection($connection)
    {
        self::$connection = $connection;

        return true;
    }
}
