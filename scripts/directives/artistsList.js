var appDirectives = angular.module('appDirectives');

appDirectives.directive('artistsList', [ function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/artistsList.html",
	    scope:{
	    	list: '=list'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	
	    }
	 };
}]);