<?php 

namespace App\Connection;

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
    		//self::_setConnection(new PDO('mysql:host=luisfbmelo.com;dbname=luisfbme_c5filhos', "luisfbme_c5artis", "jfpV!E09"));
            self::_setConnection(new PDO('mysql:host=localhost;dbname=c5filhos', "root", ""));
            //return false;
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
