var appDirectives = angular.module('appDirectives');

appDirectives.directive('selectPicker', ['$timeout', function ($timeout) {
	return {
	    restrict: 'A',
	    link: function(scope, el, attr){
	    	el.selectpicker('render');

	    	scope.$watch(attr.obj, function() {
			   $timeout(function() {
			      el.selectpicker('refresh');
			   });
			});

			if (attr.id == 'district'){
				el.prop('disabled',true);
				el.selectpicker('refresh');
			}

			scope.setDistrict = function(obj){
				var distEl = $('.selectpicker#district');
				if (obj.id == 189 && distEl.is(':disabled')){
					distEl.prop('disabled',false);
					distEl.selectpicker('refresh');

				}else if(distEl.is(':enabled')){
					distEl.prop('disabled',true);
					distEl.selectpicker('refresh');
					distEl.selectpicker('deselectAll');
				}
			}
	    }
	 };
}]);