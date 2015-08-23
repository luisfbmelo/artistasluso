var appControllers = angular.module('appControllers');

appControllers.controller('mainCtrl', ['$scope', 'headService', function ($scope, headService) {
	$scope.head = headService;
}]);