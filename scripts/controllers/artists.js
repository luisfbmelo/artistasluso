var appControllers = angular.module('appControllers');

appControllers.controller('artistsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtistsFromCat($routeParams.id);
			_getCat($routeParams.id);
		}else{
			_getNetworks();
			_getArtistsIds(); 
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtistsFromCat = function(catId){
		$scope.artists = [
			{
				id:1,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:2,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:3,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:4,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:5,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:6,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			}
		];
	}

	var _getCat = function(catId){
		$scope.cat = 
			{
				id:1,
				name: 'Artes Digitais',
				color: '#378d3b',
				areas:[
					{
						id:1,
						name: 'Design & Multimédia'
					},
					{
						id:2,
						name: 'Ilustração'
					},
					{
						id:3,
						name: 'Fotografia'
					}
				]
			};
	}

	var _getArtistsIds = function(){
		$scope.artists = [
			{
				id:1,
				art: {
					id:1,
					name: 'Artes Digitais',
					color: '#378d3b'
				}
			},
			{
				id:2,
				art: {
					id:1,
					name: 'Artes Digitais',
					color: '#378d3b'
				}
			},
			{
				id:3,
				art: {
					id:3,
					name: 'Literatura',
					color: '#378d3b'
				}
			},
			{
				id:4,
				art: {
					id:4,
					name: 'Música',
					color: '#378d3b'
				}
			},
			{
				id:5,
				art: {
					id:5,
					name: 'Performance',
					color: '#378d3b'
				}
			},
			{
				id:6,
				art: {
					id:6,
					name: 'Entidades',
					color: '#378d3b'
				}
			},
			{
				id:7,
				art: {
					id:7,
					name: 'Cinema & Vídeo',
					color: '#378d3b'
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

var appControllers = angular.module('appControllers');

appControllers.controller('artistDetailsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	
	//
	// INIT FUNCTION
	//
	var _init = function(){
		if ($routeParams.id){
			_getArtist($routeParams.id);
			_getMoreArtists();
		}
	}

	//
	// ARTISTS SERVICES
	//
	var _getArtist= function(id){
		$scope.artist = 
			{
				id:id,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				areas:[
					{
						id:1,
						name: 'Design & Multimédia'
					}
				],
				country: {
					id:1,
					name: 'Portugal'
				},
				networks:[
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
				]
			};
		
	}

	var _getMoreArtists = function(){
		$scope.otherArtists = [
			{
				id:1,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:2,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:3,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:4,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:5,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			},
			{
				id:6,
				name: 'Rui Gomes da Silva',
				image: 'profile.jpg',
				area:{
					id:1,
					name: 'Design & Multimédia'
				},
				country: {
					id:1,
					name: 'Portugal'
				}
			}
		];
	}

	_init();

}]);