'use strict';

app.directive('uploadPreview', ['$log', function ($log) {
    return {
        restrict: 'A',
        scope: {
            image: "=?image",
            maxWidth: "@?maxWidth",
            maxHeight: "@?maxHeight"
        },
        link: function (scope, elem, attrs) {
            var reader = new FileReader();
            var tempImg = new Image();
            reader.onload = function (e) {
                tempImg.src = e.target.result;
                tempImg.onload = function () {
                    var w = this.width,
                        h = this.height;

                    //SET MAX SIZES
                    scope.maxWidth = angular.isDefined(scope.maxWidth) ? scope.maxWidth : 1080;
                    scope.maxHeight = angular.isDefined(scope.maxHeight) ? scope.maxHeight : 760;


                    if (h <= scope.maxHeight && w <= scope.maxWidth) {
                        var thisFile = elem[0].files[0];

                        scope.image.src = e.target.result;
                        //set file name
                        scope.image.name = thisFile.name;

                        //set file extension
                        scope.image.extension = thisFile.name.substr(thisFile.name.lastIndexOf('.') + 1);

                        //clear errors
                        scope.image.fileError = null;

                        //clear id if exists
                        scope.image.id = null;

                    } else {
                        toastr.error('Imagens devem ter no máximo ' + scope.maxWidth + 'x' + scope.maxHeight + 'px!');
                    }

                    angular.element(".imageSpinPlaceholder").removeClass('spinner');
                    angular.element(".fileInput").val(null);
                    scope.$apply();
                }

            }

            elem.on('change', function () {
                //check if file is image
                if (elem[0].files[0].type.match('image.*')) {
                    //read file
                    reader.readAsDataURL(elem[0].files[0]);

                    //set loading
                    angular.element(".imageSpinPlaceholder").addClass('spinner');

                } else {

                    toastr.error('Formato não permitido.');

                    //clear all fields
                    scope.image.src = null;
                    scope.image.id = null;
                    angular.element(".fileInput").val(null);

                    //set type as forbidden
                    scope.image.fileError = true;
                    scope.$apply();

                }
            });
        }
    };
}]);

app.directive('imageActions', function () {
    return {
        restrict: "A",
        scope: false,
        link: function (scope, elem, attr) {
            scope.deleteImage = function () {
                scope.image.src = null;
                scope.image.id = null;
                scope.image.name = null;
                scope.image.extension = null;
                scope.image.fileError = null;

                // Reset author
                scope.innerImage = scope.$eval(attr.objimg);
            }
        }
    };
});
