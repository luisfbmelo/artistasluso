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
  'appFilters',
  'angular.filter',
  'ngAnimate'
]);

app.config(['$routeProvider', function($routeProvider) {

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
		when('/events/:id', {
			templateUrl: 'scripts/views/event-detail.html',
			controller: 'eventsDetailsCtrl'
		}).
		when('/artists', {
			templateUrl: 'scripts/views/artists.html',
			controller: 'artistsCtrl'
		}).
		when('/artists/:id', {
			templateUrl: 'scripts/views/artists-list.html',
			controller: 'artistsCtrl'
		}).
		when('/artists/details/:id', {
			templateUrl: 'scripts/views/artist-detail.html',
			controller: 'artistDetailsCtrl'
		}).
		when('/countries', {
			templateUrl: 'scripts/views/countries.html',
			controller: 'countriesCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);	