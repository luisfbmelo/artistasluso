var appDirectives = angular.module('appDirectives');

appDirectives.directive('recoverPassword', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/recoverPassword.html",
	    scope:true,
	    replace: true,
	    link: function(scope, el, attr){  
	    } 
	 };
}]); 