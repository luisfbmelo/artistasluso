var appControllers = angular.module('appControllers');

appControllers.controller('countriesCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		_getNetworks();
		_getCountriesIds(); 

	}

	//
	// ARTISTS SERVICES
	//

	var _getCountriesIds = function(){
		$scope.countries = [
			{
				id:1,
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:2,
				country: {
					id:1,
					name: 'França'
				}
			},
			{
				id:3,
				country: {
					id:3,
					name: 'Índia'
				}
			},
			{
				id:4,
				country: {
					id:4,
					name: 'Espanha'
				}
			},
			{
				id:5,
				country: {
					id:5,
					name: 'Noruega'
				}
			},
			{
				id:6,
				country: {
					id:6,
					name: 'Eua'
				}
			},
			{
				id:7,
				country: {
					id:6,
					name: 'Eua'
				}
			},
			{
				id:8,
				country: {
					id:1,
					name: 'Portugal'
				}
			},
		];
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