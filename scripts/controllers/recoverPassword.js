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