var appControllers = angular.module('appControllers');

appControllers.controller('countriesCtrl', ['$scope', '$routeParams', 'usersService', function ($scope, $routeParams, usersService) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		_getNetworks();
		_getCountriesIds(); 

	}

	//
	// SERVICES
	//

	var _getCountriesIds = function(){
		usersService.list().then(function (data) {
			$scope.countries = data;

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