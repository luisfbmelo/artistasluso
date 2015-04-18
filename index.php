<?php

require_once "php/includes/subFunction.php";
use App\Classes\Subscription as Subs;

?>
<!DOCTYPE html>
<html>
	<head>

		<meta charset="utf-8"/>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>Mirateca</title>


		<!--BOOTSTRAP STYLE-->
		<link href="stylesheets/styles.css" rel="stylesheet" type="text/css" />

		<!--CUSTOM STYLE-->
		<link href="stylesheets/main.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		
		<form class="form-inline" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
			<div class="form-group">
				<input type="text" class="form-control" name="email" id="email" placeholder="E-mail">
				<input type="submit" class="btn btn-primary" name="newSubmission" id="newSubmission" value="Subscrever">
			</div>
		</form>

		<?php 
			if(isset($pendingMessages)){
				foreach($pendingMessages as $message){
					echo $message;
				}
			}
			$allSubs = json_decode(Subs::getAllSubs(),true);
		?>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Id</th>
					<th>Email</th>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				<?php
					foreach($allSubs as $subs){
						echo "<tr>";
							echo "<td>".$subs["id_sub"]."</td>";
							echo "<td>".$subs["email"]."</td>";
							echo "<td>".$subs["reg_date"]."</td>";
						echo "</tr>";
					}
					
				?>
			</tbody>
		</table>


		<!--SCRIPTS-->
		<!--jquery-->
		<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
		<!--bootstrap-->
		<script type="text/javascript" src="javascripts/bootstrap.min.js"></script>
	</body>
</html>