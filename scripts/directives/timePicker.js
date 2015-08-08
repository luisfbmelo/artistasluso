var appDirectives = angular.module('appDirectives');

appDirectives.directive('timePicker', [ function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/timePicker.html",
	    scope: true,
	    transclude:true,
	    replace: true,
	    require: 'ngModel',
	    link: function(scope, el, attr, ngModel){
	    	var first = true;	    	

	    	//
	    	// Set if no date is provided
	    	//
	    	if (ngModel.$modalValue==undefined){
	    		var d = new Date();
			    d.setHours( 0 );
			    d.setMinutes( 0 );
			    scope.useObj = d;
	    	}

	    	//
	    	// Since it is isolated scope with inherence, 
	    	// it is necessary to set the ViewValue and render with it
	    	//
	    	scope.changed = function () {
	    		var dateString = scope.useObj.getHours()+":"+scope.useObj.getMinutes()+":00";
	    		ngModel.$setViewValue(dateString);
    			ngModel.$render();
			};

			//
			// Watch for changes in model
			//
			scope.$watch(function () {
              return ngModel.$modelValue;
           	}, function(newValue) {
               if (newValue!=undefined){
					if (first){
						scope.useObj = scope.$eval(attr.timeObj);						
					}		
					first = false;			
				}
           });
	    }
	 };
}]);