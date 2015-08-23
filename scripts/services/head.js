var appServices = angular.module('appServices');

appServices.factory('headService', [function () {
	//
	// INIT CONFIG
	//
	var title = 'Artistas Lusos',
	description = 'Plataforma de artistas lusos',
	image = 'http://www.artistaslusos.net/assets/img/logos/homepage_logo.png',
	url='http://www.artistaslusos.net';


	//
	// Utils
	//
	var _setTitle = function(title){
		title = title;
	}
	var _getTitle = function(){
		return title;
	}

	var _setDescription = function(description){
		description = description;
	}
	var _getDescription = function(){
		return description;
	}

	var _setImage = function(image){
		image = image;
	}
	var _getImage = function(){
		return image;
	}

	var _setUrl = function(url){
		url = url;
	}
	var _getUrl = function(){
		return url;
	}

    return {
        'setTitle': _setTitle,
        'getTitle': _getTitle,
        'setDescription': _setDescription,
        'getDescription': _getDescription,
        'setImage': _setImage,
        'getImage': _getImage,
        'setUrl': _setUrl,
        'getUrl': _getUrl,
    }
}]);