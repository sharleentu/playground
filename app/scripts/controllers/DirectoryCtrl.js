'use strict';
angular.module('DirectoryCtrl',[])
	.controller('DirectoryCtrl', ['$scope', '$stateParams', 'DirectoryService',
	function($scope, $stateParams, DirectoryService) {
	$scope.people = DirectoryService.all();

	$scope.search = $stateParams.search;
}]);

