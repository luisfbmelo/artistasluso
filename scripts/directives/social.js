var appDirectives = angular.module('appDirectives');

appDirectives.directive('social', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/social.html",
	    scope:{
	    	networks: '=networks',
	    	type: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){

	    }
	 };
}]);