var appControllers = angular.module('appControllers');

appControllers.controller('eventsCtrl', ['$scope', function ($scope) {
	$scope.events = [
		{
			id: 1,
			title: 'Abertura oficial do festival de janeiro',
			date: '20140313T00:00:00',
			city: {
				id:1,
				title: 'Casa da Montanha'
			},
			country: {
				id:1,
				title:'Portugal'
			},
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
			image: {
				id:1,
				url:'thumb.jpg'
			}
		},
		{
			id: 2,
			title: 'Abertura oficial do festival de janeiro',
			date: '20140313T00:00:00',
			city: {
				id:1,
				title: 'Casa da Montanha'
			},
			country: {
				id:1,
				title:'Portugal'
			},
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
			image: {
				id:1,
				url:'thumb.jpg'
			}
		}
	];
}]);

appControllers.controller('eventsDetailsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

	if ($routeParams.id){
		$scope.event = [
			{
				id: $routeParams.id,
				title: 'Abertura oficial do festival de janeiro',
				date: '20140313T00:00:00',
				city: {
					id:1,
					title: 'Casa da Montanha'
				},
				country: {
					id:1,
					title:'Portugal'
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nulla, sagittis in commodo et, sodales condimentum purus.',
				image: {
					id:1,
					url:'asd'
				}
			}
		];
	}
	
}]);