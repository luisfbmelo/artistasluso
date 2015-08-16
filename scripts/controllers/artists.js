var appControllers = angular.module('appControllers');

appControllers.controller('artistsCtrl', ['$scope', '$routeParams', 'categoriesService', 'usersService', 'authService', function ($scope, $routeParams, categoriesService, usersService, authService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	_authentication = authService.authentication;
	$scope.isLoggedIn = _authentication.isAuth;
	$scope.isAdmin = (_authentication.info!=undefined) &&
            (_authentication.info.user!=undefined) &&
            (_authentication.info.user.role == 1);
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtistsFromCat($routeParams.id);
		}else{
			_getNetworks();
			_getArtistsIds(); 
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtistsFromCat = function(catId){
		categoriesService.get(catId).then(function(data){
			$scope.cat = data
			$scope.artists = $scope.cat.users;
		},function(error){

		});
	}

	var _getArtistsIds = function(){
		usersService.list().then(function(data){
			$scope.artists = data;
		},function(error){

		});
		
	}

	var _getNetworks = function(){
		$scope.networks = [
			{
				name: 'facebook',
				url: 'www.facebook.com'
			},
			{
				name: 'twitter',
				url: 'www.twitter.com'
			},
			{
				name: 'google-plus',
				url: 'www.googleplus.com'
			}
		];
	}

	_init();
}]);

appControllers.controller('artistDetailsCtrl', ['$scope', '$routeParams', '$location', 'usersService', 'authService', function ($scope, $routeParams, $location, usersService, authService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtist($routeParams.id);
			_getMoreArtists();

		// Get data from logged user
		}else{
			_getLoggedArtist();
			_getMoreArtists();
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtist = function(id){
		usersService.get(id).then(function(data){
			$scope.artist = data;
		},function(error){

		});
	}

	var _getLoggedArtist = function(){

		if (authService.authentication.info!=undefined){
			var id = authService.authentication.info.user.id;
			usersService.get(id).then(function(data){
				$scope.artist = data;
			},function(error){

			});
		}else{
			$location.path("/");
		}		
	}

	var _getMoreArtists = function(){
		usersService.list().then(function(data){
			$scope.otherArtists = data;
		},function(error){

		});
	}

	_init();

}]);