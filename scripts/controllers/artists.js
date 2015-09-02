var appControllers = angular.module('appControllers');

appControllers.controller('artistsCtrl', ['$scope', '$routeParams', 'categoriesService', 'usersService', 'authService', function ($scope, $routeParams, categoriesService, usersService, authService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	_authentication = authService.authentication;
	$scope.isAdmin = (_authentication.info!=undefined) &&
            (_authentication.info.user!=undefined) &&
            (_authentication.info.user.role == 1);

    //
    // Get current user
    //
    $scope.curUser = (_authentication.info!=undefined) && (_authentication.info.user!=undefined) ? _authentication.info.user : null;

    //
    // Set if list is editable
    //
    $scope.editable = $scope.isAdmin;

    //
    // Set loggedin status
    //
    $scope.loggedIn = _authentication.isAuth;
	
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
		},function(error, status){

		});
	}

	var _getArtistsIds = function(){
		usersService.list().then(function(data){
			$scope.artists = data;
		},function(error, status){

		});
		
	}

	var _getNetworks = function(){
		$scope.networks = [
			{
				name: 'facebook',
			},
			{
				name: 'twitter',
			},
			{
				name: 'google-plus',
			}
		];
	}

	//
	// Handle delete
	//
	$scope.deleteUser = function(artist){

		usersService.delete(artist.id).then(function(data){
			toastr.success('Utilizador eliminado', '' ,{ timeOut: 5000 });
			artist.status = 0;
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

	_init();
}]);

appControllers.controller('artistDetailsCtrl', ['$scope', '$routeParams', '$location', 'usersService', 'authService', function ($scope, $routeParams, $location, usersService, authService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	_authentication = authService.authentication;
	$scope.isAdmin = (_authentication.info!=undefined) &&
            (_authentication.info.user!=undefined) &&
            (_authentication.info.user.role == 1);

    //
    // Set loggedin status
    //
    $scope.loggedIn = _authentication.isAuth;

    //
    // Get current user
    //
    $scope.curUser = (_authentication.info!=undefined) && (_authentication.info.user!=undefined) ? _authentication.info.user : null;

	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtist($routeParams.id);
			_getMoreArtists($routeParams.id);

		// Get data from logged user
		}else{
			_getLoggedArtist();
			//_getMoreArtists();
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtist = function(id){
		usersService.get(id).then(function(data){
			$scope.artist = data;
		},function(error, status){
			$location.path("/");
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
			
		});
	}

	var _getLoggedArtist = function(){

		if (authService.authentication.info!=undefined){
			var id = authService.authentication.info.user.id;
			usersService.get(id).then(function(data){
				$scope.artist = data;
			},function(error, status){
				$location.path("/");
				toastr.error(error.err.message, '' ,{ timeOut: 5000 });
			});
		}else{
			$location.path("/");
			
		}		
	}

	var _getMoreArtists = function(id){
		usersService.getAfter(id).then(function(data){
			$scope.otherArtists = data;
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

	//
	// Handle delete
	//
	$scope.deleteUser = function(e, artist){
		e.preventDefault();
		e.stopPropagation();
		
		usersService.delete(artist.id).then(function(data){
			toastr.success('Utilizador eliminado', '' ,{ timeOut: 5000 });
			artist.status = 0;
			$location.path("/artists");
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

	_init();

}]);