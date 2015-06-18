<?php

namespace App\Others\EmailList;

use App\Classes\Subscription as Subs;

// Check request for email list
if (isset($_GET["ubstsil"]) && $_GET["ubstsil"]=="951"){
	Subs::sendEmailList();	
}