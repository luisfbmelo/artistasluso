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