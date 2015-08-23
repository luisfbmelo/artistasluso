var appDirectives = angular.module('appDirectives');

appDirectives.directive('coloredStats', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/coloredStats.html",
	    scope:{
	    	list: '=list',
	    	groupByProp: '@?',
	    	displayProp: '@?',
	    	route: '@?',
	    	detailProp: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){

	    	// Convert string prop to usable prop on object
	    	scope.setProp = function(obj, prop) {
			    prop = prop.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
			    prop = prop.replace(/^\./, '');           // strip a leading dot
			    var a = prop.split('.');
			    for (var i = 0, n = a.length; i < n; ++i) {
			        var k = a[i];
			        if (k in obj) {
			            obj = obj[k];
			        } else {
			            return;
			        }
			    }
			    return obj;
			}

			//
			// Gives the necessary offset
			//
			scope.setOffset = function(obj, size){
				var maxColumn = size;

				if (angular.isDefined(obj)){
					var listLength = Object.keys(obj).length;
					if (listLength < maxColumn){
						return Math.ceil((maxColumn-listLength)/2);						
					}
				}				

				return false;
			}

			//
			// Returns object length
			//
			scope.objLength = function(obj){
				if (angular.isDefined(obj)){
					return Object.keys(obj).length;					
				}				
				return false;
			}
	    }
	 };
}]);