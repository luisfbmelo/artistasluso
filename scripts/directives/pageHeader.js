var appDirectives = angular.module('appDirectives');

appDirectives.directive('pageHeader', ['$location', function ($location) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/pageHeader.html",
	    scope:true,
	    replace:true,
	    link: function(scope, el, attr){

			//
		    // Highlight menu option to current view.
		    //

		    scope.defineCurrentView = function (el) {

		        //
		        // Get the section from the view after, but
		        // including the # character.
		        //
	            var parcels = $location.path().split('/');

	            if (parcels.length > 0) {

	                var viewUrl = "#/" + parcels[1];
	

	                //
	                // Search the menu and try to find a corresponding url.
	                //

	                if (angular.isDefined(el.url)) {

                        if (el.url == viewUrl) {

                            el.style = el.style.replace('link', 'active');
                           
                            return el.style;
                        }
                    }
	            }
		        
		    }
	    }
	 };
}]);