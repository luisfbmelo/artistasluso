var appControllers = angular.module('appControllers');

appControllers.controller('userCtrl', ['$scope', function ($scope) {
	//
    // NEED TO CHECK IF USER IS LOGGED
    //
}]);

appControllers.controller('userSignupCtrl', ['$scope','$filter', '$routeParams', '$location','countriesService', 'districtsService', 'categoriesService', 'networksService', 'biosService', 'usersService', function ($scope, $filter, $routeParams, $location, countriesService, districtsService, categoriesService, networksService, biosService, usersService) {

	//
	//	INIT OBJECTS
	//
	$scope.User = {};
	$scope.image = {};
	$scope.submitted = false;

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

            $location.path("/");
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

appControllers.controller('userLoginCtrl', ['$scope','$filter', '$location', 'authService', function ($scope, $filter, $location, authService) {

	//
	//	INIT OBJECTS
	//
	$scope.User = {};
	$scope.image = {};
	$scope.submitted = false;
    $scope.isCorrect = true;

	//SUBMIT NEW FORM
    $scope.loginUser = function () {
        $scope.submitted = true;

        if (Object.keys($scope.userLoginForm.$error).length == 0) {
            _constructObj(); 

             console.log($scope.User);

             _loginUser();
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

    //
    // Services
    //
    var _loginUser = function(){
        authService.login($scope.User).then(function(data){
            $scope.isCorrect = true;
            $location.path("/");
        },function(error){
            $scope.isCorrect = false;
        });
    }
}]);