var appDirectives = angular.module('appDirectives');

appDirectives.directive('selectPicker', [ function () {
	return {
	    restrict: 'A',
	    link: function(scope, el, attr){
	    	$('.selectpicker').selectpicker('render');
	    }
	 };
}]);