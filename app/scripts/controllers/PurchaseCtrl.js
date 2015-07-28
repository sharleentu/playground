'use strict';
angular.module('angularTestApp.controllers',[])
	.controller('PurchaseCtrl', ['$scope', 'OrderService',
	function($scope, OrderService) {
	$scope.orders = OrderService.all();
}]);

