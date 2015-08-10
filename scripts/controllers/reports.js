var appControllers = angular.module('appControllers');

appControllers.controller('reportsCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
    //
    // INIT CONFIG
    //
    $scope.entryLimit = 3;
    $scope.currentLast = 0;

    //
    // INIT FUNCTION
    //
	var _init = function(){
		_getArtsArt();
        _getArtsCountry();
        _getAllArts();
	}

    var _getArtsArt = function(){
        $scope.artsArt = [
            {
                id:1,
                name: 'Artes Digitais',
                totalArts: 37
            },
            {
                id:2,
                name: 'Artes Plásticas',
                totalArts: 37
            },
            {
                id:3,
                name: 'Cinema & Vídeo',
                totalArts: 37
            },
            {
                id:4,
                name: 'Literatura',
                totalArts: 37
            },
            {
                id:5,
                name: 'Música',
                totalArts: 37
            },
            {
                id:6,
                name: 'Performance',
                totalArts: 37
            },
            {
                id:7,
                name: 'Tradicional',
                totalArts: 37
            },
            {
                id:8,
                name: 'Organizações',
                totalArts: 37
            }
        ];

        //
        // Create number of columns for iterator
        //
        var artCols = Math.ceil($scope.artsArt.length/$scope.entryLimit);
        $scope.artCols = [];
        for(var i = 0; i < artCols; i++) {
            $scope.artCols.push(i);
        }
    }

    var _getArtsCountry = function(){
        $scope.artsCountry = [
            {
                id:1,
                name: 'País',
                totalArts: 37
            },
            {
                id:2,
                name: 'País',
                totalArts: 37
            },
            {
                id:3,
                name: 'País',
                totalArts: 37
            },
            {
                id:4,
                name: 'País',
                totalArts: 37
            },
            {
                id:5,
                name: 'País',
                totalArts: 37
            },
            {
                id:6,
                name: 'País',
                totalArts: 37
            },
            {
                id:7,
                name: 'País',
                totalArts: 37
            },
            {
                id:8,
                name: 'País',
                totalArts: 37
            },
            {
                id:9,
                name: 'País',
                totalArts: 37
            },
            {
                id:10,
                name: 'País',
                totalArts: 37
            },
            {
                id:12,
                name: 'País',
                totalArts: 37
            },
            {
                id:13,
                name: 'País',
                totalArts: 37
            },
            {
                id:14,
                name: 'País',
                totalArts: 37
            }
        ];

        //
        // Create number of columns for iterator
        //
        var countryCols = Math.ceil($scope.artsCountry.length/$scope.entryLimit);
        $scope.countryCols = [];
        for(var i = 0; i < countryCols; i++) {
            $scope.countryCols.push(i);
        }
    }

    var _getAllArts = function(){
        $scope.allArts = [
            {
                id:1,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:2,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:3,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:4,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:5,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:6,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:7,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:8,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            },
            {
                id:9,
                name: 'User1',
                email: 'mail@mail.com',
                countryLive:{
                    id:1,
                    name: 'Portugal'
                }
            }
        ];
    }

    //
    // Set element to start new list
    //
    $scope.setCurrentLast = function(){
        $scope.currentLast++;
    }

    _init();
}]);