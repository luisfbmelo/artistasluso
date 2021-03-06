var appServices = angular.module('appServices');

appServices.factory('usersService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	//
	// INIT CONFIG
	//
	var API = 'API/api/web/v1/users';

	//
	// Generate a service promise.
	//

	var GET_SERVICE_PROMISE = function ($q, $http, verb, url, body) {

	    var deferred = $q.defer();

 		var header = { 'Content-Type': 'application/json' };

	    var call = null != body ? $http[verb](url, body, {headers:header}) : $http[verb](url, {headers:header});

	    call.success(function (data) {

	        deferred.resolve(data);

	    }).error(function (err, status) {

	        deferred.reject({ err: err, status: status });
	    });

	    return deferred.promise; 
	}

	//
    // Web API.
    //

    var _create = function (item) {return GET_SERVICE_PROMISE($q, $http, "post", API, item);}
    var _get = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/" + id + "?expand=bios,cat,curCountry,descCountry,dist,image,social"); }
    var _getOwner = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/viewOwner/" + id + "?expand=bios,cat,curCountry,descCountry,dist,image,social"); }
    var _getAfter = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/getAfter/" + id + "?expand=cat,curCountry,descCountry,dist,image"); }
    var _getFromCountry = function (id) { return GET_SERVICE_PROMISE($q, $http, "get", API + "/curCountryUsers/" + id + "?expand=curCountry"); }
    var _list = function (type) { return GET_SERVICE_PROMISE($q, $http, "get", API+"?expand=bios,cat,curCountry,descCountry,dist,image,social"); }
    var _update = function (id, item) {return GET_SERVICE_PROMISE($q, $http, "put", API + "/" + id , item);}
    var _delete = function (id) { return GET_SERVICE_PROMISE($q, $http, "delete", API + "/delete/" + id); }
    var _recoverPassword = function (item) { return GET_SERVICE_PROMISE($q, $http, "post", API + "/requestPasswordReset", item); }
    var _sendNewPassword = function (item) { return GET_SERVICE_PROMISE($q, $http, "post", API + "/resetPassword", item); }


    return {
        'create': _create,
        'get': _get,
        'getOwner': _getOwner,
        'getAfter': _getAfter,
        'getFromCountry': _getFromCountry,
        'list': _list,
        'update': _update,
        'delete': _delete,
        'recoverPassword': _recoverPassword,
        'sendNewPassword': _sendNewPassword
    }
}]);