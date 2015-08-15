var appControllers = angular.module('appControllers');

appControllers.controller('artistsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	$scope.isLoggedIn = true;
	$scope.isAdmin = true;
	
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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

appControllers.controller('artistDetailsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtist($routeParams.id);
			_getMoreArtists();

		// Get data from logged user
		}else{
			_getLoggedArtist();
			_getMoreArtists();
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtist = function(id){
		$scope.artist = 
			{
				id:1,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				areas:[
					{
						id:1,
						name: 'Design & Multimédia'
					}
				],
				countryLive: {
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

	var _getLoggedArtist = function(){
		$scope.artist = 
			{
				id:1,
				name: 'Ruis Gomes da Silva',
				image: 'profile.jpg',
				areas:[
					{
						id:1,
						name: 'Design & Multimédia'
					}
				],
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
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
				countryLive: {
					id:1,
					name: 'Portugal'
				}
			}
		];
	}

	_init();

}]);
var appControllers = angular.module('appControllers');

appControllers.controller('countriesCtrl', ['$scope', '$routeParams', 'countriesService', function ($scope, $routeParams, countriesService) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		_getNetworks();
		_getCountriesIds(); 

	}

	//
	// SERVICES
	//

	var _getCountriesIds = function(){
		countriesService.list().then(function (data) {
			$scope.countries = data;

        }, function (error) {
        	toastr.error(error, '' ,{ timeOut: 5000 });
        });
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

appControllers.controller('datePickerCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
    //
    // INIT FUNCTION
    //
	var _init = function(){
		// SET DATE PICKER OPTIONS
        $scope.dateOptions = {
            yearRange: '-0:-0',
            showOtherMonths: true,
            firstDay: 1,
            dateFormat: "d MM yy"
        };
	}

    _init();
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('eventsCtrl', ['$scope', function ($scope) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	
	//
	// Set if list is editable
	//
	$scope.editable = false;

	//
	// Set loggedin status
	//
	$scope.loggedIn = false;

	//
	// Get list of events
	//
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

	//
    // Delete event
    //   
    $scope.deleteEl = function (el) {
        console.log("Deleted with service: " + el);
    };
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

appControllers.controller('eventsUserCtrl', ['$scope', function ($scope) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	
	//
	// Set if list is editable
	//
	$scope.editable = true;

	//
	// Set loggedin status
	//
	$scope.loggedIn = true;

	//
	// Get list of events
	//
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

	//
    // Delete event
    //   
    $scope.deleteEl = function (el) {
        console.log("Deleted with service: " + el);
    };
}]);

appControllers.controller('eventFormCtrl', ['$scope','$routeParams', 'countriesService', function ($scope,$routeParams, countriesService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	
	//
	//	INIT OBJECTS
	//
	$scope.Event = {};
	$scope.image = {};
	$scope.submitted = false;

	//
	// INIT LISTS DATA
	//
	$scope.countries = [];

	// SET WYSIWYG MENU
	$scope.Event.customMenu = [
        ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
        ['font-size'],
        ['remove-format'],
        ['left-justify', 'center-justify', 'right-justify'],
        ['link']
    ];

    // SET DATE PICKER OPTIONS
    $scope.dateOptions = {
        yearRange: '-0:-0',
        showOtherMonths: true,
        firstDay: 1,
        dateFormat: "d MM yy"
    };

    //
    // INIT FUNCTION
    //
	var _init = function(){
		//
		// GET LISTS OF EXTRA DATA
		//
		_getCountries();

		//
		// WHAT TO DO
		//
		if ($routeParams.id){
			$scope.intent = "edit";
		}else{
			$scope.intent = "new";
		}
	}

	//
	// SUBMIT FORM
	//
	$scope.submitEvent = function(){
		$scope.submitted = true;

        if (Object.keys($scope.eventForm.$error).length == 0 && $scope.image.src) {
            _constructObj(); 
            console.log($scope.Event);

            if ($routeParams.id){
            	// UPDATE
            	toastr.success('Evento alterado com sucesso!', '' ,{ timeOut: 5000 })
            	
             	console.log("update");
            }else{
            	// CREATE
            	toastr.success('Evento criado com sucesso!', '' ,{ timeOut: 5000 })
            	
            	console.log("create");
            }
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
            $scope.Event.image = {};
            $scope.Event.image.url = $scope.image.src.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
            $scope.Event.image.name = $scope.image.name;
            $scope.Event.image.extension = $scope.image.extension;
        }
    }

    //
    // SERVICES
    //
    var _getCountries = function(){
		countriesService.list().then(function (data) {
			$scope.countries = data;
        }, function (error) {
        	toastr.error(error, '' ,{ timeOut: 5000 });
        });
	}

    _init();
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
	//
	// NEED TO CHECK IF USER IS LOGGED
	//

	var _curUser = null;
	var _isLoggedIn = false;
	var _isAdmin = false;
	
	var _getUserType = function(){
		//Set scope vars from SERVICE
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
					related: 'user',
					url: '#/user',
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

//
// Controller responsible for modal behaviour
//
appControllers.controller('recoverPasswordModalCtrl',['$scope', '$modal','$log', function ($scope, $modal, $log) {

    // Set animation
    $scope.animationsEnabled = true;

    // On modal open, create an instance
    $scope.open = function (size) {

        // Open modal with params
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'recoverForm.tpl.html',
            controller: 'recoverPasswordModalInstanceCtrl',
            size: size
        });

        // Promise resolved when the modal is closed and rejected on dismiss or OK
        modalInstance.result.then(function () {            

        }, function () {
            
        });
    };
}]);

//
// Controller responsible handling modal content and functions
//
appControllers.controller('recoverPasswordModalInstanceCtrl',['$scope','$modalInstance', function ($scope, $modalInstance) {

    //
    // Init modal object
    //
    $scope.Recover = {};
    $scope.submitted = false;

    //
    // Set toastr options
    //
    toastr.options.preventDuplicates = true;

    //
    // Generic modal functions
    //

    // 
    // On OK, resolves the result to a promise as SUCCESS
    // It will submit the form on success
    //
    $scope.ok = function () {
        $scope.submitted = true;

        if (Object.keys($scope.recoverForm.$error).length == 0) {
            toastr.success('E-mail de recuperação enviado!', '' ,{ timeOut: 5000 });
            $modalInstance.close();
        }        
    };

    // On CANCEL, resolves the result to a promise a ERROR
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    //CHECK FOR ERRORS
    $scope.hasError = function (field, validation) {
        if (validation) {
            return (field.$dirty && field.$error[validation]) || ($scope.submitted && field.$error[validation]);
        }
        return (field.$dirty && field.$invalid) || ($scope.submitted && field.$invalid);
    };
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('reportsCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
    //
    // INIT CONFIG
    //
    $scope.entryLimit = 3;
    $scope.currentLast = 0;

    //
    // INIT FUNCTION
    //
	var _init = function(){
		_getArtsArt();
        _getArtsCountry();
        _getAllArts();
	}

    var _getArtsArt = function(){
        $scope.artsArt = [
            {
                id:1,
                name: 'Artes Digitais',
                totalArts: 37
            },
            {
                id:2,
                name: 'Artes Plásticas',
                totalArts: 37
            },
            {
                id:3,
                name: 'Cinema & Vídeo',
                totalArts: 37
            },
            {
                id:4,
                name: 'Literatura',
                totalArts: 37
            },
            {
                id:5,
                name: 'Música',
                totalArts: 37
            },
            {
                id:6,
                name: 'Performance',
                totalArts: 37
            },
            {
                id:7,
                name: 'Tradicional',
                totalArts: 37
            },
            {
                id:8,
                name: 'Organizações',
                totalArts: 37
            }
        ];

        //
        // Create number of columns for iterator
        //
        var artCols = Math.ceil($scope.artsArt.length/$scope.entryLimit);
        $scope.artCols = [];
        for(var i = 0; i < artCols; i++) {
            $scope.artCols.push(i);
        }
    }

    var _getArtsCountry = function(){
        $scope.artsCountry = [
            {
                id:1,
                name: 'País',
                totalArts: 37
            },
            {
                id:2,
                name: 'País',
                totalArts: 37
            },
            {
                id:3,
                name: 'País',
                totalArts: 37
            },
            {
                id:4,
                name: 'País',
                totalArts: 37
            },
            {
                id:5,
                name: 'País',
                totalArts: 37
            },
            {
                id:6,
                name: 'País',
                totalArts: 37
            },
            {
                id:7,
                name: 'País',
                totalArts: 37
            },
            {
                id:8,
                name: 'País',
                totalArts: 37
            },
            {
                id:9,
                name: 'País',
                totalArts: 37
            },
            {
                id:10,
                name: 'País',
                totalArts: 37
            },
            {
                id:12,
                name: 'País',
                totalArts: 37
            },
            {
                id:13,
                name: 'País',
                totalArts: 37
            },
            {
                id:14,
                name: 'País',
                totalArts: 37
            }
        ];

        //
        // Create number of columns for iterator
        //
        var countryCols = Math.ceil($scope.artsCountry.length/$scope.entryLimit);
        $scope.countryCols = [];
        for(var i = 0; i < countryCols; i++) {
            $scope.countryCols.push(i);
        }
    }

    var _getAllArts = function(){
        $scope.allArts = [
            {
                id:1,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:2,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:3,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:4,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:5,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:6,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:7,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:8,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:9,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            }
        ];
    }

    //
    // Set element to start new list
    //
    $scope.setCurrentLast = function(){
        $scope.currentLast++;
    }

    _init();
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('timePickerCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
    //
    // INIT FUNCTION
    //
	var _init = function(){

        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.ismeridian = false;
	}

    _init();
}]);
var appControllers = angular.module('appControllers');

appControllers.controller('userCtrl', ['$scope', function ($scope) {
	//
    // NEED TO CHECK IF USER IS LOGGED
    //
}]);

appControllers.controller('userSignupCtrl', ['$scope','$filter', '$routeParams', 'countriesService', 'districtsService', 'categoriesService', 'networksService', 'biosService', 'usersService', function ($scope, $filter, $routeParams, countriesService, districtsService, categoriesService, networksService, biosService, usersService) {

	//
	//	INIT OBJECTS
	//
	$scope.User = {};
	$scope.image = {};
	$scope.submitted = false;
	$scope.isCorrect = false;

    //
    // INIT LISTS DATA
    //
    $scope.countries = [];
    $scope.districts = [];
    $scope.categories = [];
    $scope.bios = [];
    $scope.networks = [];


    //
    // INIT FUNCTION
    //
    var _init = function(){
        _getCountries();
        _getDistricts();
        _getCategories();
        _getBios();
        _getNetworks();

        //
        // WHAT TO DO
        //
        if ($routeParams.id){
            $scope.intent = "edit";
        }else{
            $scope.intent = "new";
        }
    }

	//SUBMIT NEW FORM
    $scope.createUser = function () {
        $scope.submitted = true;

        if (Object.keys($scope.newUserForm.$error).length == 0 && $scope.image.src) {
            _constructObj(); 

             console.log($scope.User);

             if ($routeParams.id){
                _updateUser($scope.User);
            }else{
                _createUser($scope.User);
            }
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

        $scope.User.cur_country_id = $scope.User.cur_country_id!=undefined ? $scope.User.cur_country_id.id : null;
        $scope.User.desc_country_id = $scope.User.desc_country_id!=undefined ? $scope.User.desc_country_id.id : null;
        $scope.User.dist_id = $scope.User.dist_id!=undefined ? $scope.User.dist_id.id : null;
        $scope.User.cat_id = $scope.User.cat_id!=undefined ? $scope.User.cat_id.id : null; 

    }

    //
    // SERVICES
    //
    var _createUser = function(item){
        usersService.create(item).then(function (data) {
            toastr.success('Utilizador criado!', '' ,{ timeOut: 5000 });
        }, function (error) {
            toastr.error(error, '' ,{ timeOut: 5000 });
        });
    }
    
    var _getCountries = function(){
        countriesService.list().then(function (data) {
            $scope.countries=data;

        }, function (error) {
            toastr.error(error, '' ,{ timeOut: 5000 });
        });
    }

    var _getDistricts = function(){
        districtsService.list().then(function (data) {
            $scope.districts = data;
        }, function (error) {
            toastr.error(error, '' ,{ timeOut: 5000 });
        });
    }

    var _getCategories = function(){
        categoriesService.list().then(function (data) {
            $scope.categories = data;
        }, function (error) {
            toastr.error(error, '' ,{ timeOut: 5000 });
        });
    }

    var _getBios = function(){
        biosService.list().then(function (data) {
            $scope.bios = data;

            //SET USER BIOS
            $scope.User.bios = [];
            for (var a=0;a<data.length;a++){
                $scope.User.bios[a] = {};
                $scope.User.bios[a].bio_id = data[a].id;
            }
        }, function (error) {
            toastr.error(String(error), '' ,{ timeOut: 5000 });
        });
    }

    var _getNetworks = function(){
        networksService.list().then(function (data) {
            $scope.networks = data;

            //SET USER SOCIAL NETWORKS
            $scope.User.social = [];
            for (var a=0;a<data.length;a++){
                $scope.User.social[a] = {};
                $scope.User.social[a].network_id = data[a].id;
            }
        }, function (error) {
            toastr.error(String(error), '' ,{ timeOut: 5000 });
        });
    }

    _init();
}]);

appControllers.controller('userLoginCtrl', ['$scope','$filter', function ($scope, $filter) {

	//
	//	INIT OBJECTS
	//
	$scope.User = {};
	$scope.image = {};
	$scope.submitted = false;

	//SUBMIT NEW FORM
    $scope.loginUser = function () {
        $scope.submitted = true;

        if (Object.keys($scope.userLoginForm.$error).length == 0) {
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

appFilters.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    }
});
var appServices = angular.module('appServices');

appServices.factory('authService', ['$http', '$q', 'sessionStorage', function ($http, $q, sessionStorage) {

    //
    // DTO with authentication information.
    // 

    var _authentication = {

        isAuth: false,
        userName: "",
        info: null
    };

    //
    // Service configuration/settings.
    //

    var _config = {

        settings: {
            loginUrl: ''
        },

        errMsg: {
            MSG_INVALID_LOGIN_CREDENTIALS: 'Please fill username and password fields!',
            MSG_NO_LOGIN_URL_IS_DEFINED: 'INTERNAL: No login url is defined!'
        }
    };


    //
    // Method to verify the login data and this service
    // configuration settings.
    // @param loginData the user's login information.
    //        { userName :: string, password :: string }
    //

    var _verify = function (loginData) {

        //
        // Default output, no error condition.
        //

        var output = { error: false, msg: '' };

        if (!angular.isDefined(loginData) || angular.isDefined(loginData.userName) || angular.isDefined(loginData.password)) {

            //
            // ERROR: Invalid login data.
            //

            output.error = true;
            output.msg = _config.errMsg.MSG_INVALID_LOGIN_CREDENTIALS;
        }
        else if (!angular.isDefined(_config.settings.loginUrl)) {

            //
            // ERROR: No login url is defined!
            //

            output.error = true;
            output.msg = _config.errMsg.MSG_NO_LOGIN_URL_IS_DEFINED;
        }

        return output;
    };

    //    
    // Perform login use the configuration url to log the user.
    // Returns a promise to caller. 
    // @param loginData the user's login information.
    //        { userName :: string, password :: string }
    //

    var _login = function (loginData) {

        var deferred = $q.defer();

        if (angular.isDefined(loginData) && angular.isDefined(_config.settings.loginUrl)) {

            //
            // Resolve the login url.
            //

            var loginUrl = _config.settings.loginUrl;

            //
            // Everything check outs, perform the login.
            //
            var headers = {
                'username': loginData.userName,
                'password': loginData.password
            }

            $http.post(loginUrl, headers)
                .success(function (response) {

                    //
                    // Login succeded, fill the authorization data with the name and token.
                    //

                    sessionStorage.set('authorizationData', { token: response.access_token, userName: loginData.userName, info: response });

                    _authentication.isAuth = true;
                    _authentication.userName = loginData.userName;
                    _authentication.info = response;

                    deferred.resolve(response);
                })
                .error(function (err, status) {

                    _logout();
                    deferred.reject(err);
                });
        }

        return deferred.promise;
    };

    //
    // Function to logout the current user.
    // Removes authentication data from local
    // storage and sets appropriate flags.
    //

    var _logout = function () {

        sessionStorage.remove('authorizationData');
        _authentication.isAuth = false;
        _authentication.userName = '';
        _authentication.info = null;
    };

    //
    // Function to fetch from local storage the authentication
    // data and set this services state accordingly.
    //

    var _fillAuthData = function () {

        var authData = sessionStorage.get('authorizationData');

        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            _authentication.info = authData.info;
        }
    }

    //
    // Service protocol. API.
    //

    return {
        login: _login,
        logOut: _logout,
        verify: _verify,
        fillAuthData: _fillAuthData,
        authentication: _authentication
    };
}]);
var appServices = angular.module('appServices');

appServices.factory('biosService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/bios';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

	    var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise;
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API + "/create", item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
}]);
var appServices = angular.module('appServices');

appServices.factory('categoriesService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/categories';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

	    var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise;
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API + "/create", item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
}]);
var appServices = angular.module('appServices');

appServices.factory('countriesService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/countries';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

	    var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise;
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API + "/create", item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
}]);
var appServices = angular.module('appServices');

appServices.factory('districtsService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/districts';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

	    var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise;
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API + "/create", item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
}]);
var appServices = angular.module('appServices');

appServices.factory('eventsService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/events';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

	    var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise;
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API + "/create", item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
}]);
var appServices = angular.module('appServices');

appServices.service('authInterceptorService', ['$q', '$injector', '$location', 'sessionStorage', function ($q, $injector, $location, sessionStorage) {

    //
    // Default configuration for this service.
    //

    var _config = {
        STATUS_401: {
            LOGGED_IN_URL: '#/',
            NOT_LOGGED_IN_URL: '#/enter'
        }
    };


    //
    // Request part for interceptor.
    //

    var _request = function (config) {

        config.headers = config.headers || {};

        //
        // If the credential are in the local 
        // storage add them to the request.
        //

        var authData = sessionStorage.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    }

    //
    // Response part for the interceptor.
    //

    var _responseError = function (rejection) {

        //
        // In case the service fails what to do????
        //

        if (rejection.status === 401) {

            var path = '/';

            var loggedIn = angular.isDefined(sessionStorage.get('authorizationData'));

            if (loggedIn) {

                //
                // If case we wish to clear the token info, 
                // run the following code.
                //
                // var tkAuthService = $injector.get('tkAuthService');
                // authService.logOut();
                //

                path = _config.STATUS_401.LOGGED_IN_URL;
            }
            else {

                path = _config.STATUS_401.NOT_LOGGED_IN_URL;
            }

            $location.path(path);
        }

        return $q.reject(rejection);
    }

    //
    // Service API.
    //

    return {
        request: _request,
        responseError: _responseError
    };
}]);
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
var appServices = angular.module('appServices');

appServices.factory('networksService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/networks';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

	    var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise;
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API + "/create", item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
}]);
var appServices = angular.module('appServices');

appServices.factory('sessionStorage', ['$rootScope','$window', function ($rootScope, $window) {
    var _getValue = function(id){      
      return $window.sessionStorage.getItem(id);
    }
        
    var _addItem = function(id, value){
        $window.sessionStorage.setItem(id, value);
    }
    
    var _removeItem = function(id){
      $window.sessionStorage.removeItem(id);
    }

    return {
        'get': _getValue,
        'set': _addItem,
        'remove': _removeItem
    }
}]);
var appServices = angular.module('appServices');

appServices.factory('usersService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/users';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

 		var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise; 
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API, item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API+"?expand=bios,cat,curCountry,descCountry,dist,image,social"); }
    var _update = function (item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/" + id); }

    return {
        'create': _create,
        'get': _get,
        'list': _list,
        'update': _update,
        'delete': _delete,
    }
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
			scope.deleteEvent = function(el){
				scope.deleteEl()(el);
			}
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('facebookComments', ['$location','$timeout', function ($location,$timeout) {
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

app.directive('dynFbCommentBox',['$timeout', function ($timeout) {
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
          //
          // Use timeout in order to be called after all watches are done and FB script is loaded
          //
          attrs.$observe('pageHref', function (newValue) {
              var href        = newValue;
              var numposts    = attrs.numposts    || 5;
              var colorscheme = attrs.colorscheme || 'light';
              var width = attrs.width || '100%';
              elem.html(createHTML(href, numposts, colorscheme, width));
              $timeout(function () {
            if (typeof FB != 'undefined'){
                FB.XFBML.parse(elem[0]);
              }
          });
          });

          
        }
    };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('login', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/login.html",
	    scope:true,
	    replace: true,
	    link: function(scope, el, attr){  
	    	$('.selectpicker').selectpicker('render');
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

		    scope.defineCurrentView = function (el, leading, customUrl) {

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
	                if (angular.isDefined(el.url) && leading==null && customUrl==null) {

                        if (viewUrl.indexOf(el.url)>=0 && viewUrl.length>=el.url.length) {                           
                            return true;
                        }

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
	    }
	 };
}]);
var appDirectives = angular.module('appDirectives');

appDirectives.directive('recoverPassword', [function () {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/recoverPassword.html",
	    scope:true,
	    replace: true,
	    link: function(scope, el, attr){  
	    } 
	 };
}]); 
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

appDirectives.directive('social', ['$location', function ($location) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/social.html",
	    scope:{
	    	networks: '=networks',
	    	textClass: '@?',
	    	text: '@?',
	    	action: '@?',
	    	containerClass: '@?',
	    	obj: '=?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	scope.curLoc = encodeURIComponent($location.absUrl());

	    	scope.encodeEl = function(el){
	    		return encodeURIComponent(el);
	    	}
	    } 
	 };
}]); 
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
