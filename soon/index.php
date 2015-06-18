<?php

require_once "php/includes/global.conf.php";

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

		<!--FONT AWESOME STYLE-->
		<link href="bower_components/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />

		<!--CUSTOM STYLE-->
		<link href="stylesheets/mini/screen.min.css" rel="stylesheet" type="text/css" />

		<!--GOOGLE FONTS-->
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' rel='stylesheet' type='text/css'>
	</head>
	<body>

		<div class="content-wrapper">
			<div class="panels">
				<div class="right-panel">
					Brevemente<br/>
					Disponível
				</div>

				<div class="left-panel">
					<div class="logo-container">
						<img src="assets/img/logo_artistas_lusos.png" alt="Logo Artistas Lusos">
					</div>
					

					<section class="panel-title">
						Artistas Lusos é uma plataforma online que procura reunir e demonstrar o trabalho de todos os artistas descendentes de portugueses.
					</section>

					<section class="panel-section-content">
						<header>Artistas?</header>
						<ol>
							<li>Pessoas que praticam uma das belas-artes, especialmente das artes plásticas ou dos seus prolongamentos actuais;</li>
							<li>Pessoas que interpretem obras musicais, teatrais, cinematográficas ou coreográficas;</li>
							<li>Pessoas que, dedicando-se a uma arte, libertam-se das pressões burguesas.</li>
						</ol>
					</section>

					<section class="panel-section-content">
						<header>Lusos?</header>
						<ol>
							<li>Quem exprime a noção de lusitano ou relativo a Portugal;</li>
							<li>É descendente de Portugueses.</li>
						</ol>
					</section>

					<section class="panel-subs-desc">
						Esta plataforma está a ser desenvolvida. Quer ser informado quando ela ficar pronta? Basta inserir o seu e-mail no campo seguinte.
					</section>

					<form class="form-inline sub-form" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
						<div class="form-group">
								<input type="text" class="form-control" name="email" id="email"/>
								<label for="email" name="emailLabel" id="emailLabel">E-mail@exemplo.com</label>
						</div>
						<div class="form-group">
							<input type="submit" class="btn btn-submit" name="newSubmission" id="newSubmission" value="Enviar"/>
						</div>
						<div class="clearAll"></div>
					</form>
					
					<div class="brand-social">
						<section class="copyright-logo">
							<img src="assets/img/logo_mirateca.png" alt="Mirateca" />
						</section>
						<section class="social-icons">
							<ul>
								<li><a href="https://www.facebook.com/artistaslusos" target="_blank"><i class="fa fa-facebook-official"></i></a></li>
								<li><a href="https://twitter.com/miratecarts" target="_blank"><i class="fa fa-twitter-square"></i></a></li>
							</ul>
						</section>
					</div>
				</div>

			</div>
		</div>
		
		

		<?php 
			if(isset($pendingMessages)){
				foreach($pendingMessages as $message){
					echo $message;
				}
			}
			//$allSubs = json_decode(Subs::getAllSubs(),true);
		?>




		<!--SCRIPTS-->
		<!--jquery-->
		<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>

		<!--bootstrap-->
		<script type="text/javascript" src="javascripts/bootstrap.min.js"></script>

		<!--custom-->
		<script type="text/javascript" src="javascripts/script.js"></script>
	</body>
</html>