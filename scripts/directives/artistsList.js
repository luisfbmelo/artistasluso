var appDirectives = angular.module('appDirectives');

appDirectives.directive('artistsList', [ function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/artistsList.html",
	    scope:{
	    	list: '=list',
	    	max: '@?',
	    	editable: '@?',
	    	deleteEl: '&?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	if (scope.max==undefined){
	    		scope.max = 'infinite';
	    	}

	    	//
	    	// Eval editable to Bool
	    	//
	    	attr.$observe('editable', function() {
			  scope.editable = scope.$eval(attr.editable);
			});

			//
			// Delete element
			//
			scope.deleteUser = function(el){
				scope.deleteEl()(el);
			}
	    }
	 };
}]);