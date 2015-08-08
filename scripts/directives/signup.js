var appDirectives = angular.module('appDirectives');

appDirectives.directive('signup', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/signup.html",
	    scope:true,
	    replace: true,
	    link: function(scope, el, attr){  
	    	$('.selectpicker').selectpicker('render');
	    } 
	 };
}]); 