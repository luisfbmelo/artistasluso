var appServices = angular.module('appServices');

appServices.factory('authService', ['$http', '$q', 'sessionStorage', function ($http, $q, sessionStorage) {

    //
    // DTO with authentication information.
    // 

    var _authentication = {

        isAuth: false,
        email: "",
        info: null
    };

    //
    // Service configuration/settings.
    //

    var _config = {

        settings: {
            loginUrl: 'API/api/web/v1/users/login'
        },

        errMsg: {
            MSG_INVALID_LOGIN_CREDENTIALS: 'Please fill username and password fields!',
            MSG_NO_LOGIN_URL_IS_DEFINED: 'INTERNAL: No login url is defined!'
        }
    };


    //
    // Method to verify the login data and this service
    // configuration settings.
    // @param loginData the user's login information.
    //        { userName :: string, password :: string }
    //

    var _verify = function (loginData) {

        //
        // Default output, no error condition.
        //

        var output = { error: false, msg: '' };

        if (!angular.isDefined(loginData) || angular.isDefined(loginData.userName) || angular.isDefined(loginData.password)) {

            //
            // ERROR: Invalid login data.
            //

            output.error = true;
            output.msg = _config.errMsg.MSG_INVALID_LOGIN_CREDENTIALS;
        }
        else if (!angular.isDefined(_config.settings.loginUrl)) {

            //
            // ERROR: No login url is defined!
            //

            output.error = true;
            output.msg = _config.errMsg.MSG_NO_LOGIN_URL_IS_DEFINED;
        }

        return output;
    };

    //    
    // Perform login use the configuration url to log the user.
    // Returns a promise to caller. 
    // @param loginData the user's login information.
    //        { userName :: string, password :: string }
    //

    var _login = function (loginData) {

        var deferred = $q.defer();

        if (angular.isDefined(loginData) && angular.isDefined(_config.settings.loginUrl)) {

            //
            // Resolve the login url.
            //

            var loginUrl = _config.settings.loginUrl;

            //
            // Everything check outs, perform the login.
            //

            var data = "email=" + loginData.email + "&password=" + loginData.password;


            $http.post(loginUrl, data, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
                .success(function (response) {


                    //
                    // Login succeded, fill the authorization data with the name and token.
                    //

                    sessionStorage.set('authorizationData', { token: response.access_token, email: loginData.email, info: response });

                    _authentication.isAuth = true;
                    _authentication.email = loginData.email;
                    _authentication.info = response;

                    deferred.resolve(response);
                })
                .error(function (err, status) {

                    _logout();
                    deferred.reject(err);
                });
        }

        return deferred.promise;
    };

    //
    // Function to logout the current user.
    // Removes authentication data from local
    // storage and sets appropriate flags.  
    //

    var _logout = function () {

        sessionStorage.remove('authorizationData');
        _authentication.isAuth = false;
        _authentication.email = '';
        _authentication.info = null;
    };

    //
    // Function to fetch from local storage the authentication
    // data and set this services state accordingly.
    //

    var _fillAuthData = function () {

        var authData = sessionStorage.get('authorizationData');

        if (authData) {
            _authentication.isAuth = true;
            _authentication.email = authData.email;
            _authentication.info = authData.info;
        }
    }

    //
    // Service protocol. API.
    //

    return {
        login: _login,
        logOut: _logout,
        verify: _verify,
        fillAuthData: _fillAuthData,
        authentication: _authentication
    };
}]);