var appDirectives = angular.module('appDirectives');

appDirectives.directive('login', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/login.html",
	    scope:{
	    
	    },
	    replace: true,
	    link: function(scope, el, attr){  
	    } 
	 };
}]); 