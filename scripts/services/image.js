var appServices = angular.module('appServices');

appServices.factory('imagesService', [function () {
	
	//
	// Strip url
	//
	var _stripUrl = function(url){
		if((/^data:image\/(png|jpg|jpeg|gif);base64,/).test(url)){
			return url.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
		}

		if ((/^http/).test(url)){
			return url.substring(url.lastIndexOf("/") + 1);
		}
	}

    return {
        'stripUrl': _stripUrl
    }
}]);