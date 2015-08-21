'use strict';
angular.module('TaskCtrl',[])
	.controller('TaskCtrl', ['$scope', '$stateParams', 'TaskService', 'OppService',
	function($scope, $stateParams, TaskService, OppService) {
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

	$scope.show_opps = function(){
	 ModalService.showModal({
	    templateUrl: "task-opp.html",
	    controller: "TaskModalCtrl",
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	    	$scope.selected_opp = OppService.selected_opp();
	      	console.log(result);
	    });
	  });
	};



}]);


angular.module('TaskModalCtrl', [])
	.controller('TaskModalCtrl', ['$scope', 'close', 'OppService',
	function($scope, close, OppService) {

	$scope.opps = OppService.all();

	$scope.close = function(result) {
	 	close(result, 500);
	 };

	 $scope.select = function(opp) {
	 	PartService.select_opp(opp);
	 	close(part, 500);
	 };
}]);
