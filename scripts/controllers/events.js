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