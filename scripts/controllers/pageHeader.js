var appControllers = angular.module('appControllers');

appControllers.controller('menuCtrl', ['$scope', function ($scope) {

	var _curUser = null;
	var _isLoggedIn = false;
	var _isAdmin = false;
	
	var _getUserType = function(){
		//Set scope vars
		$scope.isLoggedIn = true;
		$scope.isAdmin = true;

		//Set local vars
		_isLoggedIn = $scope.isLoggedIn;
		_isAdmin = $scope.isAdmin;

		//Get current user data
		_curUser = {
			id: 1,
			name: 'Terry Costa'
		};
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
					related: 'user'
				}
			);
		}else{
			$scope.menu.push(
				{
					style: 'link',
					title: 'Entrar',
					url: '#/login',
					related: 'user'
				}
			);
		}

	}

	_getUserType();
	_defineMenu();
}]);