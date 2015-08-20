var appServices = angular.module('appServices');

appServices.service('authInterceptorService', ['$q', '$injector', '$location', 'sessionStorage', function ($q, $injector, $location, sessionStorage) {

    //
    // Default configuration for this service.
    //

    var _config = {
        STATUS_401: {
            LOGGED_IN_URL: '/',
            NOT_LOGGED_IN_URL: '/enter'
        }
    };


    //
    // Request part for interceptor.
    //

    var _request = function (config) {

        config.headers = config.headers || {};

        //
        // If the credential are in the local 
        // storage add them to the request.
        //

        var authData = sessionStorage.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    }

    //
    // Response part for the interceptor.
    //

    var _responseError = function (rejection) {
        console.log(rejection.status);
        //
        // In case the service fails what to do????
        //

        if (rejection.status == 401) {

            var path = '/';

            var loggedIn = angular.isDefined(sessionStorage.get('authorizationData'));

            if (loggedIn) {

                //
                // If case we wish to clear the token info, 
                // run the following code.
                //
                var authService = $injector.get('authService');
                authService.logOut();
                toastr.error('Sem autorização. A efetuar logout...', '' ,{ timeOut: 5000 });

                path = _config.STATUS_401.LOGGED_IN_URL;
            }
            else {

                path = _config.STATUS_401.NOT_LOGGED_IN_URL;
            }

            $location.path(path);
        }

        return $q.reject(rejection);
    }

    //
    // Service API.
    //

    return {
        request: _request,
        responseError: _responseError
    };
}]);