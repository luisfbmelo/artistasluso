var appFilters = angular.module('appFilters');

//home background
appFilters.filter('myFilter',  function () {
	return function(input, optional1, optional2) {
		//INJECT FILTER
		//$filter('date')(new Date(), 'yyyy-MM-01');
		
		
		var output;

		// Do filter work here

		return output;

	}
});

appFilters.filter('urlResolver', function(){
	return function(input){
		var result;
	    var startingUrl = "http://";
	    if (input!=undefined && input.indexOf('www') == 0) {
	        result = startingUrl + input;
	    } else {
	        result = input;
	    }
	    return result;
	}
});

appFilters.filter('urlResolverVal', function(){
	return function(input){
		var result;
	    var startingUrl = "http://";
	    if (input!=undefined && input.indexOf('www') == 0) {
	        result = startingUrl + input;
	    } else {
	        result = null;
	    }
	    return result;
	}
});

appFilters.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    }
});

appFilters.filter('timeFilter', function () {
    return function (input, format) {
        if (input) {
            var result = moment(input, 'hh:mm').format(format);
            return result;
        }
    }
});