var appControllers = angular.module('appControllers');

appControllers.controller('countriesCtrl', ['$scope', '$routeParams', 'countriesService', function ($scope, $routeParams, countriesService) {
	
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
		countriesService.list().then(function (data) {
			$scope.countries = data;

        }, function (error) {
        	toastr.error(error, '' ,{ timeOut: 5000 });
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