var appServices = angular.module('appServices');

appServices.factory('sessionStorage', ['$rootScope','$window', function ($rootScope, $window) {
    var _getValue = function(id){      
      return JSON.parse($window.sessionStorage.getItem(id));
    }
        
    var _addItem = function(id, value){
        $window.sessionStorage.setItem(id, JSON.stringify(value));
    }
    
    var _removeItem = function(id){
      $window.sessionStorage.removeItem(id);
    }

    return {
        'get': _getValue,
        'set': _addItem,
        'remove': _removeItem
    }
}]);