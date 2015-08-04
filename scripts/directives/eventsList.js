var appDirectives = angular.module('appDirectives');

appDirectives.directive('eventsList', ['LoginService', function (LoginService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/eventsList.html",
	    scope:{},
	    replace: true,
	    link: function(scope, el, attr){
	    	
	    }
	 };
}]);