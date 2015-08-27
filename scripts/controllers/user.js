var appControllers = angular.module('appControllers');

appControllers.controller('userCtrl', ['$scope', function ($scope) {
	//
    // NEED TO CHECK IF USER IS LOGGED
    //
}]);

appControllers.controller('userSignupCtrl', ['$scope', '$log' ,'$route', '$filter', '$routeParams', '$location','countriesService', 'districtsService', 'categoriesService', 'networksService', 'biosService', 'usersService', 'authService', 'imagesService', function ($scope, $log, $route, $filter, $routeParams, $location, countriesService, districtsService, categoriesService, networksService, biosService, usersService, authService, imagesService) {
    //
    // NEED TO CHECK IF USER IS LOGGED
    //
    _authentication = authService.authentication;
    $scope.isAdmin = (_authentication.info!=undefined) &&
            (_authentication.info.user!=undefined) &&
            (_authentication.info.user.role == 1);

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

            // OWNER UPDATE
            if ($routeParams.id==undefined && authService.authentication.info!=undefined && authService.authentication.info.user!=undefined && authService.authentication.info.user.id !=undefined){

                _getUserData(authService.authentication.info.user.id)
                .then(_getBios)
                .then(_getNetworks)
                .then(_getCategories)
                .then(_getCountries)
                .then(_getDistricts)
                .catch(_reportProblems);

            // UPDATE OTHERS
            }else if($routeParams.id && $scope.isAdmin){
                _getUserData($routeParams.id)
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
            
            if (pageTypeInject!=null && pageTypeInject == 'editUser'){
                _updateUser($scope.User);
            }else{
                _createUser($scope.User);
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
            $scope.User.image = {};
            $scope.User.image.url = imagesService.stripUrl($scope.image.src);
            $scope.User.image.name = $scope.image.name;
            $scope.User.image.extension = $scope.image.extension;
        }

        //Set the correct url
        if ($scope.User.social!=undefined){
        	for (var key in $scope.User.social) {
			    var val = $scope.User.social[key]['url'];
                if (val!=undefined){
                    $scope.User.social[key]['url'] = $filter('urlResolverVal')(val);
                }
			}
        }
 
        $scope.User.status = $scope.User.status!=undefined ? $scope.User.status : 1;

        $scope.User.created_at = ($scope.User.created_at!=undefined) ? $scope.User.created_at : moment().format("YYYY-MM-DD hh:mm:ss");
        $scope.User.updated_at = moment().format("YYYY-MM-DD hh:mm:ss");
    }

    //
    // SERVICES
    //
    var _createUser = function(item){
        usersService.create(item).then(function (data) {
            toastr.success('Utilizador criado! Está neste momento pendente de aprovação pelo administrador', '' ,{ timeOut: 10000 });

            //$location.path("/");
            $route.reload();
        }, function (error, status) {
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    }

    var _updateUser = function(item){
        usersService.update(item.id, item).then(function (data) {
            toastr.success('Utilizador actualizado!', '' ,{ timeOut: 5000 });

            $location.path("/");
        }, function (error, status) {
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    }
    
    var _getUserData = function(id){
        return usersService.getOwner(id).then(function (data) {
            $scope.User=data;

            // Set password to nothing
            $scope.User.password = null;

            //Set image
            if ($scope.User.image != undefined && $scope.User.image.id != undefined && $scope.User.image.id != null) {
                $scope.image.id = $scope.User.id;
                $scope.image.src = 'http://www.artistaslusos.net/API/api/modules/v1/images/'+$scope.User.image.url;
                $scope.image.name = $scope.User.image.name;
                $scope.image.extension = $scope.User.image.extension;
            }          
                      

        }, function (error, status) {
            $location.path("/");
            throw (new Error(error.err.message));
        });
    }

    var _getCountries = function(){
        return countriesService.list().then(function (data) {
            $scope.countries=data;

        }, function (error, status) {
            throw (new Error(error.err.message));
        });
    }

    var _getDistricts = function(){
        return districtsService.list().then(function (data) {
            $scope.districts = data;
        }, function (error, status) {
            throw (new Error(error.err.message));
        });
    }

    var _getCategories = function(){
        return categoriesService.list().then(function (data) {
            $scope.categories = data;
        }, function (error, status) {
            throw (new Error(error.err.message));
        });
    }

    var _getBios = function(){
        return biosService.list().then(function (data) {
            $scope.bios = data;

            //SET USER BIOS IF NEW
            if (pageTypeInject==null){
                $scope.User.bios = [];
                for (var a=0;a<data.length;a++){
                    if ($scope.User.bios[a]==undefined){
                        $scope.User.bios[a] = {};
                        $scope.User.bios[a].bio_id = data[a].id;
                    }
                }
            }else{
                // SET BIO IN CORRECT ORDER FOR SERVICE
                var finalBio = [];
                finalBio.length = data.length;

                for (var a=0;a<data.length;a++){
                    finalBio[a] = {};
                    finalBio[a].bio_id = data[a].id;

                    for(var i = 0; i<$scope.User.bios.length;i++){
                        if ($scope.User.bios[i].bio0.id==data[a].id){
                            finalBio[a] = $scope.User.bios[i];
                        }
                    }     
                         
                }
                $scope.User.bios = finalBio;
            }

        }, function (error, status) {
            throw (new Error(error.err.message));
        });
    }

    var _getNetworks = function(){
        return networksService.list().then(function (data) {
            $scope.networks = data;

            //SET USER SOCIAL NETWORKS IF NEW
            if (pageTypeInject==null){
                $scope.User.social = [];
                for (var a=0;a<data.length;a++){
                    //IF NEW
                    if ($scope.User.social[a]==undefined){
                        $scope.User.social[a] = {};
                        $scope.User.social[a].network_id = data[a].id;                    
                    }                
                }
            }else{
                // SET SOCIAL IN CORRECT ORDER FOR SERVICE
                var finalSocial = [];
                finalSocial.length = data.length;

                for (var a=0;a<data.length;a++){
                    finalSocial[a] = {};
                    finalSocial[a].network_id = data[a].id;

                    for(var i = 0; i<$scope.User.social.length;i++){
                        if ($scope.User.social[i].network.id==data[a].id){
                            finalSocial[a] = $scope.User.social[i];
                        }
                    }     
                         
                }
                $scope.User.social = finalSocial;
            }


            
        }, function (error, status) {
            throw (new Error(error.err.message));
        });
    }

    //
    // Catch errors during requests
    //
    var _reportProblems = function (fault) {
        toastr.error(String(fault), '' ,{ timeOut: 5000 });
    };

    //
    // Delete user
    //   
    $scope.deleteUser = function (el) {
        usersService.delete(el.id).then(function(){
            toastr.success('Utilizador eliminado!', '' ,{ timeOut: 5000 });

            $location.path("/artists");
        },function(error, status){
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    };

    _init();
}]);

appControllers.controller('userLoginCtrl', ['$scope','$filter', '$location', 'authService', '$routeParams', 'usersService', 'eventsService', function ($scope, $filter, $location, authService, $routeParams, usersService,eventsService) {

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

            if ($routeParams.id && $routeParams.approve && $routeParams.type){
                _loginUserApprove();
            }else{
                _loginUser();  
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

    //
    // Services
    //
    var _loginUser = function(){
        authService.login($scope.User).then(function(data){
            $scope.isCorrect = true;
            toastr.success('Entrou com sucesso!', '' ,{ timeOut: 5000 });
            $location.path("/");
        },function(error, status){
            $scope.isCorrect = false;
        });
    }

    //
    // LOGIN TO CHANGE ELEMENT STATUS
    //
    var _loginUserApprove = function(){
        authService.login($scope.User).then(function(data){
            $scope.isCorrect = true;

            // Set status
            _setStatus($routeParams.id, $routeParams.approve, $routeParams.type);

        },function(error, status){
            $scope.isCorrect = false;
        });
    }

    //
    // LOGIN TO CHANGE ELEMENT STATUS
    //
    var _setStatus = function(id, intent, type){
        if (type == 'user'){
            usersService.get(id)
            .then(function(data){
                data.status = parseInt(intent);
                data.password=null;

                usersService.update(data.id, data).then(function(){
                    toastr.success('Aprovação submetida!', '' ,{ timeOut: 5000 });
                    $location.path("/");
                });
            });

        }else if(type=='event'){
            eventsService.get(id)
            .then(function(data){
                data.status = parseInt(intent);

                eventsService.update(data.id, data).then(function(){
                    toastr.success('Aprovação submetida!', '' ,{ timeOut: 5000 });
                    $location.path("/");
                });
            });
        }
    }
}]);

appControllers.controller('userResetPassword', ['$scope','$filter', '$location', 'authService', '$routeParams', 'usersService', function ($scope, $filter, $location, authService, $routeParams, usersService) {

    //
    //  INIT OBJECTS
    //
    $scope.User = {};
    $scope.submitted = false;


    //SUBMIT NEW FORM
    $scope.resetPassword = function () {
        $scope.submitted = true;

        if (Object.keys($scope.userResetForm.$error).length == 0) {

            if ($routeParams.resetToken){
                _setNewPassword($routeParams.resetToken);
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

    //
    // Services
    //

    var _setNewPassword = function(token){
        var finalObj = {
            reset_token: token,
            password: $scope.User.password
        }
        usersService.sendNewPassword(finalObj).then(function(data){
            toastr.success('Password alterada com sucesso!', '' ,{ timeOut: 5000 });
            $location.path("/");
        },function(error, status){
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    }
}]);