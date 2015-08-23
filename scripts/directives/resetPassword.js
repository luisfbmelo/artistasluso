var appDirectives = angular.module('appDirectives');

appDirectives.directive('resetPassword', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/resetPassword.html",
	    scope:true,
	    replace: true,
	    link: function(scope, el, attr){  
	    	
	    } 
	 };
}]); 