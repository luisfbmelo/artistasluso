var appControllers = angular.module('appControllers');

appControllers.controller('footerCtrl', ['$scope', function ($scope) {
	
	//
	// Footer icons
	//
	
	$scope.icons = [
		{
			elClass: 'govpt',
			url: '#/'
		},
		{
			elClass: 'comunidade',
			url: '#/'
		},
		{
			elClass: 'mirateca',
			url: '#/'
		}
	];

}]);