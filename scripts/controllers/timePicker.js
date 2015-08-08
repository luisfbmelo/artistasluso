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