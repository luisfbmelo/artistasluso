var appDirectives = angular.module('appDirectives');

appDirectives.directive('social', ['$location', function ($location) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/social.html",
	    scope:{
	    	networks: '=networks',
	    	textClass: '@?',
	    	text: '@?',
	    	action: '@?',
	    	containerClass: '@?',
	    	obj: '=?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	scope.curLoc = encodeURIComponent($location.absUrl());

	    	scope.encodeEl = function(el){
	    		return encodeURIComponent(el);
	    	}
	    } 
	 };
}]); 