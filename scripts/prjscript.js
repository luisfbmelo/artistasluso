var appControllers = angular.module('appControllers');

appControllers.controller('eventsCtrl', ['$scope', function ($scope) {
	
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('homeCtrl', ['$scope', function ($scope) {
	
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('mainCtrl', ['$scope', function ($scope) {
	
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('footerCtrl', ['$scope', function ($scope) {
	
	//
	// Footer icons
	//
	
	$scope.icons = [
		{
			elClass: 'govpt',
			url: '#/'
		},
		{
			elClass: 'comunidade',
			url: '#/'
		},
		{
			elClass: 'mirateca',
			url: '#/'
		}
	];

}]);
var appControllers = angular.module('appControllers');

appControllers.controller('menuCtrl', ['$scope', function ($scope) {

	var _curUser = null;
	var _isLoggedIn = false;
	var _isAdmin = false;
	
	var _getUserType = function(){
		//Set scope vars
		$scope.isLoggedIn = true;
		$scope.isAdmin = true;

		//Set local vars
		_isLoggedIn = $scope.isLoggedIn;
		_isAdmin = $scope.isAdmin;

		//Get current user data
		_curUser = {
			id: 1,
			name: 'Terry Costa'
		};
	}

	var _defineMenu = function(){
		$scope.menu = [
			{
				style: 'link',
				title: 'Projeto',
				url: '#/project'
			},
			{
				style: 'link',
				title: 'Eventos',
				url: '#/events'
			},
			{
				style: 'link',
				title: 'Artistas',
				url: '#/artists',
				subs: [
					{style: 'link', id:1, title: 'Artes Digitais'},
					{style: 'link', id:2, title: 'Artes Plásticas'},
					{style: 'link', id:3, title: 'Cinema e Vídeo'},
					{style: 'link', id:4, title: 'Literatura'},
					{style: 'link', id:5, title: 'Música'},
					{style: 'link', id:6, title: 'Performance'},
					{style: 'link', id:7, title: 'Tradicional'},
					{style: 'link', id:8, title: 'Organizações'}
				]
			},
			{
				style: 'link',
				title: 'Países',
				url: '#/countries'
			}
		];

		if (_isLoggedIn){
			$scope.menu.push(
				{
					style: 'link',
					id: _curUser.id,
					title: _curUser.name,
					type: (_isAdmin) ? 'admin' : 'regular',
					related: 'user'
				}
			);
		}else{
			$scope.menu.push(
				{
					style: 'link',
					title: 'Entrar',
					url: '#/login',
					related: 'user'
				}
			);
		}

	}

	_getUserType();
	_defineMenu();
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('projectCtrl', ['$scope', function ($scope) {
	
}]);
var appFilters = angular.module('appFilters');

//home background
appDirectives.filter('myFilter',  function () {
	return function(input, optional1, optional2) {
		//INJECT FILTER
		//$filter('date')(new Date(), 'yyyy-MM-01');
		
		
		var output;

		// Do filter work here

		return output;

	}
});
var appServices = angular.module('appServices');

appServices.factory('LoginService', ['$rootScope', function ($rootScope) {
	return {
	    isLogedin: function() {
	       return [
	          false, 1
	       ];
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('eventsList', ['LoginService', function (LoginService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/eventsList.html",
	    scope:{},
	    replace: true,
	    link: function(scope, el, attr){
	    	
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('pageFooter', ['LoginService', function (LoginService) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/pageFooter.html",
	    replace: true
	 };
}]);
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