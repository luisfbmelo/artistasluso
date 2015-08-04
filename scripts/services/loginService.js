var appServices = angular.module('appServices');

appServices.factory('LoginService', ['$rootScope', function ($rootScope) {
	return {
	    isLogedin: function() {
	       return [
	          false, 1
	       ];
	    }
	 };
}]);