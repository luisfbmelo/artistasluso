var appControllers = angular.module('appControllers');

appControllers.controller('menuCtrl', ['$scope', 'authService', function ($scope, authService) {
	//
	// NEED TO CHECK IF USER IS LOGGED
	//

	var _authentication = null;
	var _curUser = null;
	var _isLoggedIn = false;
	var _isAdmin = false;
	
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

	var _defineMenu = function(){
		$scope.menu = [
			{
				style: 'link',
				title: 'Projeto',
				url: '#/project'
			},
			{
				style: 'link',
				title: 'Eventos',
				url: '#/events'
			},
			{
				style: 'link',
				title: 'Artistas',
				url: '#/artists',
				style: 'static',
				subs: [
					{style: 'link', title: 'Todos', url: '#/artists' },
					{style: 'link', id:1, title: 'Artes Digitais'},
					{style: 'link', id:2, title: 'Artes Plásticas'},
					{style: 'link', id:3, title: 'Cinema e Vídeo'},
					{style: 'link', id:4, title: 'Literatura'},
					{style: 'link', id:5, title: 'Música'},
					{style: 'link', id:6, title: 'Performance'},
					{style: 'link', id:7, title: 'Tradicional'},
					{style: 'link', id:8, title: 'Organizações'}
				]
			},
			{
				style: 'link',
				title: 'Países',
				url: '#/countries'
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
					url: '#/user',
				}
			);
		}else{
			$scope.menu.push(
				{
					style: 'link',
					title: 'Entrar',
					url: '#/enter',
					related: 'user'
				}
			);
		}

	}
	authService.fillAuthData();
	_getUserType();
	_defineMenu();

	$scope.$on("$locationChangeStart", function (event, next, current) {
		authService.fillAuthData();
        _getUserType();
		_defineMenu();		
    });
}]);