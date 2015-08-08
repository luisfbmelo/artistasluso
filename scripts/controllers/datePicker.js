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