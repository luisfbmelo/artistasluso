<?php

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