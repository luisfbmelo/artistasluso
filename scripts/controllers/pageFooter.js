var appControllers = angular.module('appControllers');

appControllers.controller('footerCtrl', ['$scope', function ($scope) {
	
	//
	// Footer icons
	//
	
	$scope.icons = [
		{
			elClass: 'govpt',
			url: 'http://www.portugal.gov.pt/pt.aspx'
		},
		{
			elClass: 'comunidade',
			url: 'https://www.portaldascomunidades.mne.pt/pt/'
		},
		{
			elClass: 'mirateca',
			url: 'http://mirateca.com/default.aspx'
		}
	];

}]);