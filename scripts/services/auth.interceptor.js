/*// ============================================================================
// Project: Toolkit
// Name/Class: 
// Created On: 18/Mar/2015
// Author: João Carreiro (joao.carreiro@cybermap.pt)
// Company: Cybermap Lda.
// Description:
// ============================================================================

'use strict';

angular.module('toolkit').service('tkAuthInterceptorService', ['$q', '$injector', '$location', 'localStorageService', 'tkRuntime', function ($q, $injector, $location, localStorageService, tkRuntime) {

    //
    // Default configuration for this service.
    //

    var _defaultConfig = {
        STATUS_401: {
            LOGGED_IN_URL: '/',
            NOT_LOGGED_IN_URL: '/'
        }
    };

    var _config = {};

    //
    // Process settings. Merge the defined settings
    // for this component found in the runtime with 
    // default values.
    //

    var _processConfig = function () {

        //
        // Fetch the configuration for this service, merge
        // with default values and set the scope object.
        //

        $.extend(true, _config, _defaultConfig, tkRuntime.get("service.tkAuthInterceptorService"));
    }

    //
    // Request part for interceptor.
    //

    var _request = function (config) {

        config.headers = config.headers || {};

        //
        // If the credential are in the local 
        // storage add them to the request.
        //

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    }

    //
    // Response part for the interceptor.
    //

    var _responseError = function (rejection) {

        //
        // In case the service fails what to do????
        //

        if (rejection.status === 401) {

            var path = '/';

            var loggedIn = angular.isDefined(localStorageService.get('authorizationData'));

            if (loggedIn) {

                //
                // If case we wish to clear the token info, 
                // run the following code.
                //
                // var tkAuthService = $injector.get('tkAuthService');
                // authService.logOut();
                //

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
        responseError: _responseError,
        processConfig: _processConfig
    };
}]);*/