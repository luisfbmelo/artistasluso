var appControllers = angular.module('appControllers');

appControllers.controller('reportsCtrl', ['$scope','$routeParams', 'usersService', 'categoriesService', 'countriesService', function ($scope,$routeParams, usersService, categoriesService, countriesService) {
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
        categoriesService.list().then(function(data){
            $scope.artsArt = data

            //
            // Create number of columns for iterator
            //
            var artCols = Math.ceil($scope.artsArt.length/$scope.entryLimit);
            $scope.artCols = [];
            for(var i = 0; i < artCols; i++) {
                $scope.artCols.push(i);
            }
        },function(error, status){
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });        
    }

    var _getArtsCountry = function(){
        countriesService.listTotalCur().then(function(data){
            $scope.artsCountry = data;

            //
            // Create number of columns for iterator
            //
            var countryCols = Math.ceil($scope.artsCountry.length/$scope.entryLimit);
            $scope.countryCols = [];
            for(var i = 0; i < countryCols; i++) {
                $scope.countryCols.push(i);
            }
        },function(error, status){
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });

        
    }

    var _getAllArts = function(){
        usersService.list().then(function(data){
            $scope.allArts = data;
        },function(error, status){
            toastr.error(error.err.message, '' ,{ timeOut: 5000 });
        });
    }

    //
    // Set element to start new list
    //
    $scope.setCurrentLast = function(){
        $scope.currentLast++;
    }

    _init();
}]);