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
  'ngAnimate',
  'ui.bootstrap',
  'wysiwyg.module',
  'ui.date'
]);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

	$routeProvider.
		when('/', {
			templateUrl: 'scripts/views/home.html',
			controller: 'homeCtrl'
		}).
		when('/enter', {
			templateUrl: 'scripts/views/enter.html',
			controller: 'userCtrl'
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
		when('/new-event', {
			templateUrl: 'scripts/views/event-new.html',
			controller: 'eventFormCtrl'
		}).
		when('/edit-event/:id', {
			templateUrl: 'scripts/views/event-new.html',
			controller: 'eventFormCtrl'
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
		when('/user', {
			templateUrl: 'scripts/views/artist-detail.html',
			controller: 'artistDetailsCtrl'
		}).
		when('/user/edit', {
			templateUrl: 'scripts/views/artist-edit.html',
			controller: 'userSignupCtrl',
			resolve: {
				pageType: function(){
					return 'editUser';
				}
			}
		}).
		when('/user/my-events/list', {
			templateUrl: 'scripts/views/events.html',
			controller: 'eventsUserCtrl'
		}).
		when('/admin-report', {
			templateUrl: 'scripts/views/admin-report.html',
			controller: 'reportsCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

	//
	// Add interceptor
	//
	$httpProvider.interceptors.push('authInterceptorService');
}]);	