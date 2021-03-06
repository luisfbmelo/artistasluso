var appDirectives = angular.module('appDirectives');

appDirectives.directive('pageHeader', ['$location', 'authService', function ($location, authService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/pageHeader.html",
	    scope:true,
	    replace:true,
	    link: function(scope, el, attr){

	    	//
	    	// Close menu on link click
	    	//
	    	el.on("click", "a", null, function () {
		         el.find(".collapse.in").collapse('hide');
		         if (!el.find(".navbar-toggle").hasClass("collapsed")){
		         	el.find(".navbar-toggle").addClass("collapsed");
		         }
			});

			//
		    // Highlight menu option to current view.
		    //

		    scope.defineCurrentView = function (el, leading, customUrl) {

		        //
		        // Get the section from the view after, but
		        // including the # character.
		        //
	            var parcels = $location.path().substring($location.path().indexOf('/')+1);
	            

	            if (parcels.length > 0) {

	                var viewUrl = parcels;  

	                //
	                // Search the menu and try to find a corresponding url.
	                //

	                // Is a 1 level
	                if (angular.isDefined(el.url) && leading==null && customUrl==null) {

                        return viewUrl.indexOf(el.url)==0 && viewUrl.length>=el.url.length;

                    // Is a 2 level
                    }else if (angular.isDefined(el.id) && leading!=null && customUrl==null) {

                    	leading.active = false;
                    	el.active = false;

                    	if (leading.url+'/'+el.id == viewUrl) {

                            return true;
                        }

                    // Is a 2 level but exacly the same as 1
                    }else if(leading != null){
                    	if (viewUrl==el.url) {                           
                            return true;
                        }
                    }else if (customUrl!=null && viewUrl.indexOf(customUrl)>=0 && viewUrl.length==customUrl.length) {                           
                        return true;

                    }
                    
	            }
		        
		    }

		    //
		    // Logout function
		    //
		    scope.logoutUser = function(){
		    	authService.logOut();
		    	toastr.success('Logout com sucesso!', '' ,{ timeOut: 5000 });
		    	$location.path("/");
		    }
	    }
	 };
}]);