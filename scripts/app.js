/*APP MODULES*/
var appControllers = angular.module('appControllers',[]);
var appServices = angular.module('appServices',[]);
var appDirectives = angular.module('appDirectives',[]);
var appFilters = angular.module('appFilters',[]);

var app = angular.module('artistasluso', [
  'ngRoute',
  'appControllers',
  'appServices',
  'appDirectives',
  'appFilters'
]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'scripts/views/home.html',
				controller: 'homeCtrl'
			}).
			when('/project', {
				templateUrl: 'scripts/views/project.html',
				controller: 'projectCtrl'
			}).
			when('/events', {
				templateUrl: 'scripts/views/events.html',
				controller: 'eventsCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);