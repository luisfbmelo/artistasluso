var appControllers = angular.module('appControllers');

appControllers.controller('userCtrl', ['$scope', function ($scope) {
	//
    // NEED TO CHECK IF USER IS LOGGED
    //
}]);

appControllers.controller('userSignupCtrl', ['$scope', '$log' ,'$route', '$filter', '$routeParams', '$location','countriesService', 'districtsService', 'categoriesService', 'networksService', 'biosService', 'usersService', 'authService', 'imagesService', function ($scope, $log, $route, $filter, $routeParams, $location, countriesService, districtsService, categoriesService, networksService, biosService, usersService, authService, imagesService) {

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
    // INIT EXTRA VARS
    //
    var pageTypeInject = null;

    //
    // INIT FUNCTION
    //
    var _init = function(){
        _getCountries();
        _getDistricts();
        _getCategories();

        // Inject page type if exists
        pageTypeInject = ($route.current.locals.pageType) ? $route.current.locals.pageType : null;
        
        //
        // WHAT TO DO
        //
        if (pageTypeInject!=null && pageTypeInject == 'editUser'){
            $scope.intent = "edit";

            if (authService.authentication.info!=undefined && authService.authentication.info.user!=undefined && authService.authentication.info.user.id !=undefined){

                _getUserData(authService.authentication.info.user.id)
                .then(_getBios)
                .then(_getNetworks)
                .then(_getCategories)
                .then(_getCountries)
                .then(_getDistricts)
                .catch(_reportProblems);
            }else{
                $location.path("/");
            }
        }else{
            $scope.intent = "new";

            // Get bios and networks first only if new
            _getBios();
            _getNetworks(); 
        }
    }

	//SUBMIT NEW FORM
    $scope.createUser = function () {
        $scope.submitted = true;

        if (Object.keys($scope.userForm.$error).length == 0 && $scope.image.src && (($scope.User.password == $scope.User.confPassword) || ($scope.User.password.length == 0 && ($scope.User.confPassword==undefined || $scope.User.confPassword.length == 0)))) {

            _constructObj(); 
            console.log($scope.User);
            
            if (pageTypeInject!=null && pageTypeInject == 'editUser'){
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
            $scope.User.image.url = imagesService.stripUrl($scope.image.src);
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
 
        //
        // Set items ids
        //
        $scope.User.curCountry = $scope.User.curCountry!=undefined ? $scope.User.curCountry.id : null;
        $scope.User.descCountry = $scope.User.descCountry!=undefined ? $scope.User.descCountry.id : null;
        $scope.User.dist = ($scope.User.dist!=undefined && $scope.User.descCountry==189) ? $scope.User.dist.id : null;
        $scope.User.cat = $scope.User.cat!=undefined ? $scope.User.cat.id : null; 

        $scope.User.created_at = ($scope.User.created_at!=undefined) ? $scope.User.created_at : moment().format("YYYY-MM-DD hh:mm:ss");
        $scope.User.updated_at = moment().format("YYYY-MM-DD hh:mm:ss");
    }

    //
    // SERVICES
    //
    var _createUser = function(item){
        usersService.create(item).then(function (data) {
            toastr.success('Utilizador criado!', '' ,{ timeOut: 5000 });

            //$location.path("/");
            $route.reload();
        }, function (error) {
            toastr.error(error, '' ,{ timeOut: 5000 });
        });
    }

    var _updateUser = function(item){
        usersService.update(item.id, item).then(function (data) {
            toastr.success('Utilizador actualizado!', '' ,{ timeOut: 5000 });

            $location.path("/user");
        }, function (error) {
            toastr.error(error, '' ,{ timeOut: 5000 });
        });
    }
    
    var _getUserData = function(id){
        return usersService.get(id).then(function (data) {
            $scope.User=data;

            // Set password to nothing
            $scope.User.password = null;

            //Set image
            if ($scope.User.image.id != undefined && $scope.User.image.id != null) {
                $scope.image.id = $scope.User.id;
                $scope.image.src = 'http://localhost/artistasluso/API/api/modules/v1/images/'+$scope.User.image.url;
                $scope.image.name = $scope.User.image.name;
                $scope.image.extension = $scope.User.image.extension;
            }
                      

        }, function (error) {
            throw (new Error(error));
        });
    }

    var _getCountries = function(){
        return countriesService.list().then(function (data) {
            $scope.countries=data;

        }, function (error) {
            throw (new Error(error));
        });
    }

    var _getDistricts = function(){
        return districtsService.list().then(function (data) {
            $scope.districts = data;
        }, function (error) {
            throw (new Error(error));
        });
    }

    var _getCategories = function(){
        return categoriesService.list().then(function (data) {
            $scope.categories = data;
        }, function (error) {
            throw (new Error(error));
        });
    }

    var _getBios = function(){
        return biosService.list().then(function (data) {
            $scope.bios = data;

            //SET USER BIOS IF NEW
            if (pageTypeInject==null){
                $scope.User.bios = [];
                for (var a=0;a<data.length;a++){
                    $scope.User.bios[a] = {};
                    $scope.User.bios[a].bio_id = data[a].id;
                }
            }

        }, function (error) {
            throw (new Error(error));
        });
    }

    var _getNetworks = function(){
        return networksService.list().then(function (data) {
            $scope.networks = data;

            //SET USER SOCIAL NETWORKS IF NEW
            if (pageTypeInject==null){
                $scope.User.social = [];
            }

            for (var a=0;a<data.length;a++){
                //IF NEW
                if ($scope.User.social[a]==undefined){
                    $scope.User.social[a] = {};
                    $scope.User.social[a].network_id = data[a].id;                    
                }
                
            }
            
        }, function (error) {
            throw (new Error(error));
        });
    }

    //
    // Catch errors during requests
    //
    var _reportProblems = function (fault) {
        $log.error(String(fault));
    };

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
            toastr.success('Entrou com sucesso!', '' ,{ timeOut: 5000 });
            $location.path("/");
        },function(error){
            $scope.isCorrect = false;
        });
    }
}]);