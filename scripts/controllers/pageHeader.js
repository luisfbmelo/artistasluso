var appControllers = angular.module('appControllers');

appControllers.controller('menuCtrl', ['$scope', 'authService', 'categoriesService', function ($scope, authService, categoriesService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//

	var _authentication = null;
	var _curUser = null;
	var _isLoggedIn = false;
	var _isAdmin = false;
	var categories = [];

	var _init = function(){
		authService.fillAuthData();
		_getUserType();
		_getArts().then(_defineMenu);
	}
	
	var _getUserType = function(){
		//Set scope vars from SERVICE
		_authentication = authService.authentication;

		$scope.isLoggedIn = _authentication.isAuth;
		$scope.isAdmin = (_authentication.info!=undefined) &&
            (_authentication.info.user!=undefined) &&
            (_authentication.info.user.role == 1);

		//Set local vars
		_isLoggedIn = $scope.isLoggedIn;
		_isAdmin = $scope.isAdmin;

		//Get current user data
		if (_isLoggedIn){
			_curUser = _authentication.info.user;
			$scope.curUser = _curUser;
		}
	}

	var _getArts = function(){
		return categoriesService.list().then(function(data){
			categories.push({style: 'link', title: 'Todos', url: 'artists' });

			for(var a=0;a<data.length;a++){
				var obj = {
					style: 'link', id:data[a].id, title: data[a].name
				}
				categories.push(obj);
			}
		});
	}

	var _defineMenu = function(){
		$scope.menu = [
			{
				style: 'link',
				title: 'Projeto',
				url: 'project'
			},
			{
				style: 'link',
				title: 'Eventos',
				url: 'events'
			},
			{
				style: 'link',
				title: 'Artistas',
				url: 'artists',
				style: 'static',
				subs: categories
			},
			{
				style: 'link',
				title: 'Países',
				url: 'countries'
			}
		];

		if (_isLoggedIn){
			$scope.menu.push(
				{
					style: 'link',
					id: _curUser.id,
					title: _curUser.name,
					type: (_isAdmin) ? 'admin' : 'regular',
					related: 'user',
					url: 'user',
				}
			);
		}else{
			$scope.menu.push(
				{
					style: 'link',
					title: 'Entrar',
					url: 'enter',
					related: 'user'
				}
			);
		}

	}
	

	$scope.$on("$locationChangeStart", function (event, next, current) {
		authService.fillAuthData();
        _getUserType();
		_defineMenu();		
    });

    _init();
}]);