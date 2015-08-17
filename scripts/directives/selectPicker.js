var appDirectives = angular.module('appDirectives');

appDirectives.directive('selectPicker', ['$timeout', function ($timeout) {
	return {
	    restrict: 'A',
	    link: function(scope, el, attr){
	    	el.selectpicker('render');

	    	scope.$watch(attr.obj, function() {
			   $timeout(function() {				
					if(attr.id == 'countryDesc' && scope.$eval(attr.ngModel)!=undefined){
						_setInitDist(scope.$eval(attr.ngModel));
					}

					el.selectpicker('refresh');
					
			   });
			});

			scope.setDistrict = function(obj){				
				var distEl = $('.selectpicker#district');
				if (obj!=undefined && obj.id == 189 ){
					distEl.prop('disabled',false);
					distEl.selectpicker('refresh');
				}else{
					distEl.selectpicker('deselectAll');
					distEl.prop('disabled',true);			
					distEl.selectpicker('refresh');
				}
			}

			var _setInitDist = function(obj){
				var distEl = $('.selectpicker#district');
				if (obj!=undefined && obj.id == 189){
					distEl.prop('disabled',false);
					distEl.selectpicker('refresh');
				}else{
					distEl.prop('disabled',true);			
					distEl.selectpicker('refresh');
				}
			}
	    }
	 };
}]);