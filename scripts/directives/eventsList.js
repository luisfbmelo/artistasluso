var appDirectives = angular.module('appDirectives');

appDirectives.directive('eventsList', [ function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/eventsList.html",
	    scope:{
	    	list: '=list'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	
	    }
	 };
}]);