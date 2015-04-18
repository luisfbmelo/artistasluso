<?php
require_once "php/classes/subscriptions.php";

use App\Classes\Subscription as Subs;

// Check if e-mail was submitted
if (isset($_POST["newSubmission"]) && isset($_POST["email"])){
	$pendingMessages = [];

	$sub = new Subs();
	$result = $sub->create($_POST["email"]);
	//var_dump($result);
	if (is_array($result) && sizeof($result)>0){
		foreach($result as $key=>$values){
			foreach($values as $value)
				array_push($pendingMessages, printMessage($key, $value));
		}
	}
}

// Print messages
function printMessage($type,$message){
	$html="";
	switch($type){
		case "errors":
			$html.='<div class="alert alert-danger" role="alert">'.$message.'</div>';
		break;
		case "success":
			$html.='<div class="alert alert-success" role="alert">'.$message.'</div>';
		break;
	}
	return $html;
}