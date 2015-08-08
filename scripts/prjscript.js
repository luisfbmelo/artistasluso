var appControllers = angular.module('appControllers');

appControllers.controller('artistsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtistsFromCat($routeParams.id);
			_getCat($routeParams.id);
		}else{
			_getNetworks();
			_getArtistsIds(); 
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtistsFromCat = function(catId){
		$scope.artists = [
			{
				id:1,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:2,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:3,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:4,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:5,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:6,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			}
		];
	}

	var _getCat = function(catId){
		$scope.cat = 
			{
				id:1,
				name: 'Artes Digitais',
				color: '#378d3b',
				areas:[
					{
						id:1,
						name: 'Design & Multimédia'
					},
					{
						id:2,
						name: 'Ilustração'
					},
					{
						id:3,
						name: 'Fotografia'
					}
				]
			};
	}

	var _getArtistsIds = function(){
		$scope.artists = [
			{
				id:1,
				art: {
					id:1,
					name: 'Artes Digitais',
					color: '#378d3b'
				}
			},
			{
				id:2,
				art: {
					id:1,
					name: 'Artes Digitais',
					color: '#378d3b'
				}
			},
			{
				id:3,
				art: {
					id:3,
					name: 'Literatura',
					color: '#378d3b'
				}
			},
			{
				id:4,
				art: {
					id:4,
					name: 'Música',
					color: '#378d3b'
				}
			},
			{
				id:5,
				art: {
					id:5,
					name: 'Performance',
					color: '#378d3b'
				}
			},
			{
				id:6,
				art: {
					id:6,
					name: 'Entidades',
					color: '#378d3b'
				}
			},
			{
				id:7,
				art: {
					id:7,
					name: 'Cinema & Vídeo',
					color: '#378d3b'
				}
			},
			{
				id:8,
				art: {
					id:9,
					name: 'Outro'
				}
			},
		];
	}

	var _getNetworks = function(){
		$scope.networks = [
			{
				name: 'facebook',
				url: 'www.facebook.com'
			},
			{
				name: 'twitter',
				url: 'www.twitter.com'
			},
			{
				name: 'google-plus',
				url: 'www.googleplus.com'
			}
		];
	}

	_init();
}]);

var appControllers = angular.module('appControllers');

appControllers.controller('artistDetailsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtist($routeParams.id);
			_getMoreArtists();
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtist= function(id){
		$scope.artist = 
			{
				id:id,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				areas:[
					{
						id:1,
						name: 'Design & Multimédia'
					}
				],
				country: {
					id:1,
					name: 'Portugal'
				},
				networks:[
					{
						name: 'facebook',
						url: 'www.facebook.com'
					},
					{
						name: 'twitter',
						url: 'www.twitter.com'
					},
					{
						name: 'google-plus',
						url: 'www.googleplus.com'
					}
				]
			};
		
	}

	var _getMoreArtists = function(){
		$scope.otherArtists = [
			{
				id:1,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:2,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:3,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:4,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:5,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:6,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			}
		];
	}

	_init();

}]);
var appControllers = angular.module('appControllers');

appControllers.controller('countriesCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		_getNetworks();
		_getCountriesIds(); 

	}

	//
	// ARTISTS SERVICES
	//

	var _getCountriesIds = function(){
		$scope.countries = [
			{
				id:1,
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:2,
				country: {
					id:1,
					name: 'França'
				}
			},
			{
				id:3,
				country: {
					id:3,
					name: 'Índia'
				}
			},
			{
				id:4,
				country: {
					id:4,
					name: 'Espanha'
				}
			},
			{
				id:5,
				country: {
					id:5,
					name: 'Noruega'
				}
			},
			{
				id:6,
				country: {
					id:6,
					name: 'Eua'
				}
			},
			{
				id:7,
				country: {
					id:6,
					name: 'Eua'
				}
			},
			{
				id:8,
				country: {
					id:1,
					name: 'Portugal'
				}
			},
		];
	}

	var _getNetworks = function(){
		$scope.networks = [
			{
				name: 'facebook',
				url: 'www.facebook.com'
			},
			{
				name: 'twitter',
				url: 'www.twitter.com'
			},
			{
				name: 'google-plus',
				url: 'www.googleplus.com'
			}
		];
	}

	_init();
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('eventsCtrl', ['$scope', function ($scope) {
	$scope.events = [
		{
			id: 1,
			title: 'Abertura oficial do festival de janeiro',
			dateStart: '20140313T00:00:00',
			city: {
				id:1,
				title: 'Casa da Montanha'
			},
			country: {
				id:1,
				title:'Portugal'
			},
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
			image: {
				id:1,
				url:'thumb.jpg'
			}
		},
		{
			id: 2,
			title: 'Abertura oficial do festival de janeiro',
			dateStart: '20140313T00:00:00',
			city: {
				id:1,
				title: 'Casa da Montanha'
			},
			country: {
				id:1,
				title:'Portugal'
			},
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
			image: {
				id:1,
				url:'thumb.jpg'
			}
		}
	];
}]);

appControllers.controller('eventsDetailsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

	if ($routeParams.id){
		$scope.event = 
			{
				id: $routeParams.id,
				title: 'Abertura oficial do festival de janeiro',
				dateStart: '20140313T00:00:00',
				dateEnd: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'thumb.jpg'
				}
			};

		$scope.otherEvents = [
			{
				id: 1,
				title: 'Abertura oficial do festival de janeiro',
				dateStart: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'thumb.jpg'
				}
			},
			{
				id: 2,
				title: 'Abertura oficial do festival de janeiro',
				dateStart: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'thumb.jpg'
				}
			},
			{
				id: 3,
				title: 'Abertura oficial do festival de janeiro',
				dateStart: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'thumb.jpg'
				}
			},
			{
				id: 4,
				title: 'Abertura oficial do festival de janeiro',
				dateStart: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'thumb.jpg'
				}
			},
			{
				id: 5,
				title: 'Abertura oficial do festival de janeiro',
				dateStart: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'thumb.jpg'
				}
			}
		];

		$scope.networks = [
			{
				name: 'facebook',
				url: 'www.facebook.com'
			},
			{
				name: 'twitter',
				url: 'www.twitter.com'
			},
			{
				name: 'google-plus',
				url: 'www.googleplus.com'
			}
		];
	}
	
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
		/*$scope.isLoggedIn = true;
		$scope.isAdmin = true;*/

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
				style: 'static',
				subs: [
					{style: 'link', title: 'Todos', url: '#/artists' },
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
					url: '#/enter',
					related: 'user'
				}
			);
		}

	}

	_getUserType();
	_defineMenu();

	$scope.$on("$locationChangeStart", function (event, next, current) {
        _getUserType();
		_defineMenu();
    });
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('projectCtrl', ['$scope', function ($scope) {
	
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('userCtrl', ['$scope', function ($scope) {
	
}]);

appControllers.controller('userSignupCtrl', ['$scope','$filter', function ($scope, $filter) {

	//
	//	INIT OBJECTS
	//
	$scope.User = {};
	$scope.image = {};


	//
	// WHEN GETTING ELEMENT, SET IMAGE OBJECT
	//
	/*if (angular.isDefined($scope.User.image) && $scope.User.image!=null) {
        $scope.image.src = $scope.User.image.src;
        $scope.image.name = $scope.User.image.name;
        $scope.image.id = $scope.User.image.id;
    }*/

	//
    // WATCH EXAMPLE
    //
    /*$scope.$watch(function () {
        return locale.get();
    }, function (newValue) {

        if (angular.isDefined(newValue)) {
            $scope.newAuthorForm.$setPristine();
            _getObj();
        }
    });*/

	//SUBMIT NEW FORM
    $scope.createUser = function () {
        $scope.submitted = true;

        if (Object.keys($scope.newUserForm.$error).length == 0) {
            _constructObj(); 

             console.log($scope.User);
        }
    }

	//CHECK FOR ERRORS
    $scope.hasError = function (field, validation) {
        if (validation) {
            return (field.$dirty && field.$error[validation]) || ($scope.submitted && field.$error[validation]);
        }
        return (field.$dirty && field.$invalid) || ($scope.submitted && field.$invalid);
    };

    //Construct final obj
    var _constructObj = function () {
        //Set image if exists
        if ($scope.image.src != undefined && $scope.image.id == null) {
            $scope.User.image = {};
            $scope.User.image.url = $scope.image.src.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
            $scope.User.image.name = $scope.image.name;
            $scope.User.image.extension = $scope.image.extension;
        }

        //Set the correct url
        if ($scope.User.networks!=undefined){
        	for (var key in $scope.User.networks) {
			    var val = $scope.User.networks[key];
		   	 	$scope.User.networks[key] = $filter('urlResolverVal')(val);
			}
        }
    }
}]);
var appFilters = angular.module('appFilters');

//home background
appFilters.filter('myFilter',  function () {
	return function(input, optional1, optional2) {
		//INJECT FILTER
		//$filter('date')(new Date(), 'yyyy-MM-01');
		
		
		var output;

		// Do filter work here

		return output;

	}
});

appFilters.filter('urlResolver', function(){
	return function(input){
		var result;
	    var startingUrl = "http://";
	    if (input.startsWith("www")) {
	        result = startingUrl + input;
	    } else {
	        result = input;
	    }
	    return result;
	}
});

appFilters.filter('urlResolverVal', function(){
	return function(input){
		var result;
	    var startingUrl = "http://";
	    if (input.startsWith("www")) {
	        result = startingUrl + input;
	    } else {
	        result = null;
	    }
	    return result;
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

appDirectives.directive('artistsList', [ function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/artistsList.html",
	    scope:{
	    	list: '=list',
	    	max: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	if (scope.max==undefined){
	    		scope.max = 'infinite';
	    	}
	    }
	 };
}]);
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
var appDirectives = angular.module('appDirectives');

appDirectives.directive('eventsList', [ function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/eventsList.html",
	    scope:{
	    	list: '=list',
	    	max: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	if (scope.max==undefined){
	    		scope.max = 'infinite';
	    	}
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('facebookComments', ['$location', function ($location) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/facebookComments.html",
	    scope:{
	    	text: '@?',
	    	textClass: '@?',
	    	containerClass: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	scope.curPath = $location.absUrl();
	    }
	 };
}]);

app.directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, colorscheme, width) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '" ' +
                       'data-width="' + width + '">' +
               '</div>';
    }


    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var width = attrs.width || '100%';
                elem.html(createHTML(href, numposts, colorscheme, width));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});
var appDirectives = angular.module('appDirectives');

appDirectives.directive('login', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/login.html",
	    scope:{
	    
	    },
	    replace: true,
	    link: function(scope, el, attr){  
	    } 
	 };
}]); 
var appDirectives = angular.module('appDirectives');

appDirectives.directive('pageFooter', [function () {
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

		    scope.defineCurrentView = function (el, leading) {

		        //
		        // Get the section from the view after, but
		        // including the # character.
		        //
	            var parcels = $location.path().split('#');

	            if (parcels.length > 0) {

	                var viewUrl = "#" + parcels[0];               

	                //
	                // Search the menu and try to find a corresponding url.
	                //

	                // Is a 1 level
	                if (angular.isDefined(el.url) && leading==null) {

                        if (viewUrl.indexOf(el.url)>=0 && viewUrl.length>=el.url.length) {                           
                            return true;
                        }

                    // Is a 2 level
                    }else if (angular.isDefined(el.id) && leading!=null) {

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
                    }
	            }
		        
		    }
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('signup', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/signup.html",
	    scope:true,
	    replace: true,
	    link: function(scope, el, attr){  
	    	$('.selectpicker').selectpicker('render');
	    } 
	 };
}]); 
var appDirectives = angular.module('appDirectives');

appDirectives.directive('social', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/social.html",
	    scope:{
	    	networks: '=networks',
	    	textClass: '@?',
	    	text: '@?',
	    	action: '@?',
	    	containerClass: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	console.log(scope.networks);  
	    } 
	 };
}]); 
'use strict';

app.directive('uploadPreview', ['$log', function ($log) {
    return {
        restrict: 'A',
        scope: {
            image: "=?image",
            maxWidth: "@?maxWidth",
            maxHeight: "@?maxHeight"
        },
        link: function (scope, elem, attrs) {
            var reader = new FileReader();
            var tempImg = new Image();
            reader.onload = function (e) {
                tempImg.src = e.target.result;
                tempImg.onload = function () {
                    var w = this.width,
                        h = this.height;

                    //SET MAX SIZES
                    scope.maxWidth = angular.isDefined(scope.maxWidth) ? scope.maxWidth : 1080;
                    scope.maxHeight = angular.isDefined(scope.maxHeight) ? scope.maxHeight : 760;


                    if (h <= scope.maxHeight && w <= scope.maxWidth) {
                        var thisFile = elem[0].files[0];

                        scope.image.src = e.target.result;
                        //set file name
                        scope.image.name = thisFile.name;

                        //set file extension
                        scope.image.extension = thisFile.name.substr(thisFile.name.lastIndexOf('.') + 1);

                        //clear errors
                        scope.image.fileError = null;

                        //clear id if exists
                        scope.image.id = null;

                    } else {
                        toastr.error('Imagens devem ter no máximo ' + scope.maxWidth + 'x' + scope.maxHeight + 'px!');
                    }

                    angular.element(".imageSpinPlaceholder").removeClass('spinner');
                    angular.element(".fileInput").val(null);
                    scope.$apply();
                }

            }

            elem.on('change', function () {
                //check if file is image
                if (elem[0].files[0].type.match('image.*')) {
                    //read file
                    reader.readAsDataURL(elem[0].files[0]);

                    //set loading
                    angular.element(".imageSpinPlaceholder").addClass('spinner');

                } else {

                    toastr.error('Formato não permitido.');

                    //clear all fields
                    scope.image.src = null;
                    scope.image.id = null;
                    angular.element(".fileInput").val(null);

                    //set type as forbidden
                    scope.image.fileError = true;
                    scope.$apply();

                }
            });
        }
    };
}]);

app.directive('imageActions', function () {
    return {
        restrict: "A",
        scope: false,
        link: function (scope, elem, attr) {
            scope.deleteImage = function () {
                scope.image.src = null;
                scope.image.id = null;
                scope.image.name = null;
                scope.image.extension = null;
                scope.image.fileError = null;

                // Reset author
                scope.innerImage = scope.$eval(attr.objimg);
            }
        }
    };
});
