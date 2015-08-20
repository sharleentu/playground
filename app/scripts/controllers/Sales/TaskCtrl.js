'use strict';
angular.module('TaskCtrl',[])
	.controller('TaskCtrl', ['$scope', '$stateParams', 'TaskService',
	function($scope, $stateParams, TaskService) {
	$scope.tasks = TaskService.all();

	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":" + currentdate.getMinutes();
	var length = $scope.tasks.length;
	var id = length+1;

	$scope.newTask = {};
	$scope.add = function(newTask) {
		TaskService.add(newTask);
		$scope.newTask = {};
	};


	$scope.id = $stateParams.id;

	$scope.tasks.forEach(function(task) {
		if(task.id === $scope.id) {
			$scope.task = task;
		}
	});

}]);

