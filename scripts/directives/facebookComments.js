var appDirectives = angular.module('appDirectives');

appDirectives.directive('facebookComments', ['$location','$timeout', function ($location,$timeout) {
	return {
	    restrict: 'E',
	    templateUrl: "scripts/directives/facebookComments.html",
	    scope:{
	    	text: '@?',
	    	textClass: '@?',
	    	containerClass: '@?'
	    },
	    replace: true,
	    link: function(scope, el, attr){
	    	scope.curPath = $location.absUrl();
	    }
	 };
}]);

appDirectives.directive('dynFbCommentBox',['$timeout', function ($timeout) {
    function createHTML(href, numposts, colorscheme, width) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '" ' +
                       'data-width="' + width + '">' +
               '</div>';
    }


    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
          //
          // Use timeout in order to be called after all watches are done and FB script is loaded
          //
          attrs.$observe('pageHref', function (newValue) {
              var href        = newValue;
              var numposts    = attrs.numposts    || 5;
              var colorscheme = attrs.colorscheme || 'light';
              var width = attrs.width || '100%';
              elem.html(createHTML(href, numposts, colorscheme, width));
              $timeout(function () {
                if (typeof FB != 'undefined'){
                    FB.XFBML.parse(elem[0]);
                  }
              });
          });

          
        }
    };
}]);