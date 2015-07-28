'use strict';
angular.module('DetailCtrl',[]).controller('DetailCtrl', ['$scope', '$stateParams', 'OrderService',
	function($scope, $stateParams, OrderService) {

	$scope.id = $stateParams.id;
	$scope.orders = OrderService.all();

	//console.log(item_id);

	$scope.myFilter = function(order) {
		return order.show === "true";
	};

	$scope.orders.forEach(function(order) {
		if(order.id === $scope.id) {
			$scope.order = order;
			$scope.items = order.items;
		}
	});

	
	$scope.order = $scope.orders[$scope.id-1];
	$scope.items = $scope.order.items;

	$scope.itemid = $stateParams.itemid;
	$scope.item = $scope.items[$scope.itemid-1];

}]);

