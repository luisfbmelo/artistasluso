var appControllers = angular.module('appControllers');

appControllers.controller('eventsCtrl', ['$scope', 'authService', 'eventsService', function ($scope, authService, eventsService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	_authentication = authService.authentication;
	$scope.isAdmin = (_authentication.info!=undefined) &&
            (_authentication.info.user!=undefined) &&
            (_authentication.info.user.role == 1);            
	
	//
	// Set if list is editable
	//
	$scope.editable = $scope.isAdmin;

	//
	// Set loggedin status
	//
	$scope.loggedIn = _authentication.isAuth;

	//
	// INIT FUNCTION
	//
	var _init = function(){
		_getEvents();	
	}

	//
	// Get list of events
	//
	var _getEvents = function(){
		eventsService.list().then(function(data){
			$scope.events = data;
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

	//
    // Delete event
    //   
    $scope.deleteEl = function (el) {
        eventsService.delete(el.id).then(function(){
			_getEvents();
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
    };

    _init();
}]);

appControllers.controller('eventsDetailsCtrl', ['$scope', '$routeParams', 'eventsService', function ($scope, $routeParams, eventsService) {

	var _init = function(){
		if ($routeParams.id){
			_getEvent($routeParams.id);
			_getAfter($routeParams.id);

			//
			// Set sharing networks
			//
			$scope.networks = [
				{
					name: 'facebook',
				},
				{
					name: 'twitter',
				},
				{
					name: 'google-plus',
				}
			];
		}else{
			$location.path("/");
		}
	}
	

	//
	// Get list of events
	//
	var _getEvent = function(id){
		eventsService.get(id).then(function(data){
			$scope.event = data;
		},function(error, status){
			$location.path("/");
		});
	}

	var _getAfter = function(id){
		eventsService.getAfter(id).then(function(data){
			$scope.otherEvents = data;
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

	_init();
	
}]);

appControllers.controller('eventsUserCtrl', ['$scope', 'authService', 'eventsService', function ($scope, authService, eventsService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//
	_authentication = authService.authentication;

	//
	// Set if list is editable
	//
	$scope.editable = true;

	//
	// Set loggedin status
	//
	$scope.loggedIn = _authentication.isAuth;

	//
	// INIT FUNCTION
	//
	var _init = function(){
		_getEvent();
	}

	//
	// Get list of user events
	//
	var _getEvent = function(id){
		eventsService.getFromUser().then(function(data){
			$scope.events = data;
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

	//
    // Delete event
    //   
    $scope.deleteEl = function (el) {
        eventsService.delete(el.id).then(function(){
			_getEvent();
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
    };

    _init();
}]);

appControllers.controller('eventFormCtrl', ['$scope','$routeParams', '$location', 'countriesService', 'authService', 'eventsService', 'moment', function ($scope,$routeParams, $location, countriesService, authService, eventsService, moment) {
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
			_getEvent($routeParams.id);
		}else{
			$scope.intent = "new";
			$scope.Event = {
				timeStart: '00:00:00',
				timeEnd: '00:00:00'
			};
		}
	}

	//
	// SUBMIT FORM
	//
	$scope.submitEvent = function(){
		$scope.submitted = true;

        if (Object.keys($scope.eventForm.$error).length == 0 && $scope.image.src && $scope.Event.timeStart!=undefined && $scope.Event.dateStart!=undefined) {
            _constructObj(); 

            if ($routeParams.id){
            	// UPDATE
            	_updateEvent($scope.Event);
            }else{
            	// CREATE
            	_createEvent($scope.Event);         
            }
        }else{
        	toastr.error('Preencha os campos correctamente', '' ,{ timeOut: 5000 });
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

        //If no user, set currently logged as the owner
        if ($scope.Event.user == undefined){
        	$scope.Event.user = {
        		id: authService.authentication.info.user.id
        	}
        }        
    }

    //
    // SERVICES
    //
    var _createEvent = function(item){
        eventsService.create(item).then(function (data) {
            toastr.success('Evento criado!', '' ,{ timeOut: 5000 });

            $location.path("/events");
        }, function (error, status) {
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    }

    var _updateEvent = function(item){
        eventsService.update(item.id, item).then(function (data) {
            toastr.success('Evento actualizado!', '' ,{ timeOut: 5000 });

            $location.path("/events");
        }, function (error, status) {
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    }

	var _getEvent = function(id){
		eventsService.get(id).then(function(data){
			$scope.Event = data;

			//Set image
            if ($scope.Event.image.id != undefined && $scope.Event.image.id != null) {
                $scope.image.id = $scope.Event.id;
                $scope.image.src = 'http://www.artistaslusos.net/API/api/modules/v1/images/'+$scope.Event.image.url;
                $scope.image.name = $scope.Event.image.name;
                $scope.image.extension = $scope.Event.image.extension;
            }
		},function(error, status){
			toastr.error(error.err.message, '' ,{ timeOut: 5000 });
		});
	}

    var _getCountries = function(){
		countriesService.list().then(function (data) {
			$scope.countries = data;
        }, function (error, status) {
        	toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
	}


    _init();
}]);