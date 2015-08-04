var appControllers = angular.module('appControllers');

appControllers.controller('artistsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtistsFromCat($routeParams.id);
		}else{
			_getNetworks();
			_getArtistsIds(); 
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtistsFromCat = function(catId){

	}

	var _getArtistsIds = function(){
		$scope.artists = [
			{
				id:1,
				art: {
					id:1,
					name: 'Artes Digitais'
				}
			},
			{
				id:2,
				art: {
					id:1,
					name: 'Artes Digitais'
				}
			},
			{
				id:3,
				art: {
					id:3,
					name: 'Literatura'
				}
			},
			{
				id:4,
				art: {
					id:4,
					name: 'Música'
				}
			},
			{
				id:5,
				art: {
					id:5,
					name: 'Performance'
				}
			},
			{
				id:6,
				art: {
					id:6,
					name: 'Entidades'
				}
			},
			{
				id:7,
				art: {
					id:7,
					name: 'Cinema & Vídeo'
				}
			},
			{
				id:8,
				art: {
					id:9,
					name: 'Outro'
				}
			},
		];
	}

	var _getNetworks = function(){
		$scope.networks = [
			{
				name: 'facebook',
				url: 'www.facebook.com'
			},
			{
				name: 'twitter',
				url: 'www.twitter.com'
			},
			{
				name: 'google-plus',
				url: 'www.googleplus.com'
			}
		];
	}

	_init();
}]);