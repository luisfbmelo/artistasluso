var appDirectives = angular.module('appDirectives');

appDirectives.directive('social', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/social.html",
	    scope:{
	    	networks: '=networks',
	    	textClass: '@?',
	    	text: '@?',
	    	action: '@?',
	    	containerClass: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	console.log(scope.networks);  
	    } 
	 };
}]); 