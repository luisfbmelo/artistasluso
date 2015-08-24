<?php 
namespace App\Classes;

use App\Connection\PdoConnection as DB;
use PDO;

class Subscription{
	private $id_sub;
	private $email;
	private $reg_date;
	private static $connection;
	private $messages = array("success"=>array(),"errors"=>array());

	public function __construct(){
		if (!self::$connection){
			self::_setConnection(DB::getConnection());
		}
	}

	/**
	 * Creates new subscription
	 * @param  $email->string
	 * @return mixed
	 */
	public function create($email){
        // Check connections
        if (isset(self::$connection)){

    		//Check if email is valid
    		if ($this->validateEmail($email)){

    			//Check if email exists
    			if (!$this->checkExist($email)){


    				//Begin transaction and try to insert
    				try {
    					self::$connection->beginTransaction();

    					$params = array(':email' => $email);	     
    					$query = self::$connection->prepare('INSERT INTO subscription (email,reg_date) VALUES (:email, NOW())');
    					$query->execute($params);

    					self::$connection->commit();

    					array_push($this->messages["success"],"E-mail adicionado com sucesso");
    					return $this->messages;

    				//Rollback transaction if error
    				} catch (Exception $e) {

    					self::$connection->rollBack(); 
    					array_push($this->messages["errors"],"Não foi possível estabelecer ligação ao servidor.");
    					return $this->messages;
    				}

    			}else{
    				
    				array_push($this->messages["errors"],"Email já existe");
    				return $this->messages;
    			}
    	
    		}else{
    			return $this->messages;
    		}
        }else{
            array_push($this->messages["errors"],"Não foi possível estabelecer ligação ao servidor.");
            return $this->messages;
        }

	}

	/**
	 * Validates inserted email
	 * @param  $email->string
	 * @return boolean
	 */
	private function validateEmail($email){
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
			array_push($this->messages["errors"],"E-mail inválido");
			return false;
		}else{
			return true;
		}
		  
	}

	/**
	 * Check if subscription already exists
	 * @param  $email->string
	 * @return boolean
	 */
	private function checkExist($email){
		$params = array(':email' => $email);
     
		$query = self::$connection->prepare('
		    SELECT id_sub FROM subscription
		    WHERE email = :email');
		$query->execute($params);

		return ($query->rowCount()>0);
	}

	/**
	 * Return all subscriptions
	 * @return application/json
	 */
	public static function getAllSubs(){
        if (self::getConnection()){
            $query = self::getConnection()->query('
                SELECT * FROM subscription');
            $query->execute();

            return json_encode($query->fetchAll(PDO::FETCH_ASSOC));
        }else{
            return false;
        }
		
	}

    public static function sendEmailList(){

        $list = json_decode(self::getAllSubs(),true);

        $body = "<table>
        <thead>
            <tr>
                <td style=\"padding:0 10px;font-weight:700;\">
                    ID
                </td>
                <td style=\"padding:0 10px;font-weight:700;\">
                    MAIL
                </td>
                <td style=\"padding:0 10px;font-weight:700;\">
                    DATA
                </td>
            </tr>
        </thead>
        <tbody>";

        foreach($list as $element){
            $body .="<tr>";
                $body .="<td style=\"padding:0 10px;\">".$element["id_sub"]."</td>";
                $body .="<td style=\"padding:0 10px;\">".$element["email"]."</td>";
                $body .="<td style=\"padding:0 10px;\">".$element["reg_date"]."</td>";
            $body .="</tr>";
        }

        $body .= "</tbody>
        </table>";
        

        $to = "info@mirateca.com";
        $from = "info@mirateca.com";
        $subject = "Lista de subscritos";

        $name='=?UTF-8?B?'.base64_encode("Mirateca").'?=';
        $subject='=?UTF-8?B?'.base64_encode($subject).'?=';
        $headers="From: $name <{$from}>\r\n".
            "Reply-To: {$to}\r\n".
            "MIME-Version: 1.0\r\n".
            "Content-Type: text/html; charset=UTF-8";

        mail($to,$subject,$body,$headers);
    }


    /**
     * Gets the value of id_sub.
     *
     * @return mixed
     */
    public function getIdSub()
    {
        return $this->id_sub;
    }

    /**
     * Sets the value of id_sub.
     *
     * @param mixed $id_sub the id sub
     *
     * @return self
     */
    private function _setIdSub($id_sub)
    {
        $this->id_sub = $id_sub;

        return $this;
    }

    /**
     * Gets the value of email.
     *
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Sets the value of email.
     *
     * @param mixed $email the email
     *
     * @return self
     */
    private function _setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Gets the value of reg_date.
     *
     * @return mixed
     */
    public function getRegDate()
    {
        return $this->reg_date;
    }

    /**
     * Sets the value of reg_date.
     *
     * @param mixed $reg_date the reg date
     *
     * @return self
     */
    private function _setRegDate($reg_date)
    {
        $this->reg_date = $reg_date;

        return $this;
    }

    /**
     * Gets the value of connection and sets if doesn't exist.
     *
     * @return mixed
     */
    public function getConnection()
    {
        if (!self::$connection){
    		self::_setConnection(DB::getConnection());
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