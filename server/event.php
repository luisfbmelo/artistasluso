<?php
/*$API = 'http://www.artistaslusos.net/API/api/web/v1/';
$siteRoot = 'http://www.artistaslusos.net/';
$imagesUrl = 'http://www.artistaslusos.net/API/api/modules/v1/images/';*/

$API = 'http://localhost/artistasluso/API/api/web/v1/';
$siteRoot = 'http://localhost/artistasluso/';
$imagesUrl = 'http://localhost/artistasluso/API/api/modules/v1/images/';

$jsonData = getData($API);
makePage($jsonData, $siteRoot, $imagesUrl);

/**
 * Get data from API
 */
function getData($api) {
    $id = (isset($_GET['id']) && ctype_digit($_GET['id'])) ? $_GET['id'] : 1;
    $rawData = file_get_contents($api.'events/'.$id);
    return json_decode($rawData);
}

/**
 * Set page variables
 */
function makePage($data, $siteRoot, $imagesUrl) {
    $imageUrl = $imagesUrl . $data->image->url;
    $pageUrl = $siteRoot . "events/" . $data->id;
    $title = 'Evento - '.$data->title;
    $description = $data->description;
?>

	<!DOCTYPE html>
	<html>
	<head>
		<base href="/">
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
	    <title>Artistas Lusos</title>

	    <!--META-->
	    <!--facebook-->
	    <meta property="fb:app_id" content="441293852709692">
	    <meta property="fb:admins" content="1176945264"/>

		<!--SEO-->
		<meta name="description" content="<?php echo $description; ?>">
		<meta name="keywords" content="">
		<meta name="author" content="Artistas Luso">

		<!-- Schema.org markup for Google+ -->
		<meta itemprop="name" content="<?php echo $title; ?>">
		<meta itemprop="description" content="<?php echo $description; ?>">
		<meta itemprop="image" content="<?php echo $imageUrl; ?>">

		<!-- Twiter Cards -->
		<meta name="twitter:card" content="summary">
		<meta name="twitter:site" content="@artistasluso"> 
		<meta name="twitter:title" content="<?php echo $title; ?>">
		<meta name="twitter:description" content="<?php echo $description; ?>">
		<meta name="twitter:image:src" content="<?php echo $imageUrl; ?>">
		<!--/ Twiter Cards -->

		<!-- Open Graph -->
		<meta property="og:site_name" content="Artistas Luso">
		<meta property="og:type" content="website">
		<meta property="og:title" content="<?php echo $title; ?>" />
		<meta property="og:url" content="<?php echo $pageUrl; ?>">
		<meta property="og:description" content="P<?php echo $description; ?>">
		<meta property="og:image" content="<?php echo $imageUrl; ?>">
		<!--/ Open Graph -->
		
		<!-- FAVICON -->
		<link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="assets/img/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
		<link rel="manifest" href="assets/img/favicon/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="assets/img/favicon/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">
		<!--/ FAVICON -->

	</head>
	<body>
		<img src="<?php echo $imageUrl; ?>">
		<h1><?php echo $title; ?></h1>
		<p><?php echo $description; ?></p>	    
	</body>
	</html>
<?php
}