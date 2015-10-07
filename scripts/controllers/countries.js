var appControllers = angular.module('appControllers');

appControllers.controller('countriesCtrl', ['$scope', '$routeParams', 'usersService', 'countriesService', function ($scope, $routeParams, usersService, countriesService) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		

		if ($routeParams.id){
			_getArtistsFromCountry($routeParams.id);
			_getCountry($routeParams.id);
		}else{
			_getNetworks();
			_getCountriesIds(); 
			_getCountriesWithUser();
		}

	}

	//
	// SERVICES
	//
	var _getArtistsFromCountry = function(id){
		usersService.getFromCountry(id).then(function(data){
			$scope.artists = data
		},function(error, status){

		});
	}

	var _getCountry = function(id){
		countriesService.get(id).then(function(data){
			$scope.country = data
		},function(error, status){

		});
	}

	var _getCountriesIds = function(){
		usersService.list().then(function (data) {
			$scope.countries = data;

        }, function (error, status) {
        	toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
	}

	var _getCountriesWithUser = function(){
		countriesService.listWithUser().then(function (data) {
			$scope.countriesWithUser = data;

        }, function (error, status) {
        	toastr.error(error.err.message, '' ,{ timeOut: 5000 });
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