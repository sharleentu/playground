'use strict';
angular.module('ProductCtrl',[])
	.controller('ProductCtrl', ['$scope', '$stateParams', 'ProductService',
	function($scope, $stateParams, ProductService) {
	$scope.products = ProductService.all();
}]);

