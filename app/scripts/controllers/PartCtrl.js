'use strict';
angular.module('PartCtrl',[])
	.controller('PartCtrl', ['$scope', '$stateParams', 'ModalService', 'PartService',
	function($scope, $stateParams, ModalService, PartService) {

	$scope.parts = PartService.all();	


	$scope.show_list = function(param1){
	 ModalService.showModal({
	    templateUrl: "parts.html",
	    controller: "PartsModalCtrl",
	    inputs: {
	    	parts: param1
	    },
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	    	$scope.selected_part= PartService.selected();
	      	console.log(result);
	    });
	  });
	};

	$scope.show_types = function(n){
	 ModalService.showModal({
	    templateUrl: "task-opp.html",
	    controller: "ModelModalCtrl",
	    inputs: {
	    	types: n
	    },
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	    	$scope.selected_model = PartService.selected_model();
	      	console.log(result);
	    });
	  });
	};
}]);

angular.module('ModelModalCtrl', [])
	.controller('ModelModalCtrl', ['$scope', 'close', 'types', 'PartService',
	function($scope, close, types, PartService) {

	$scope.types = types;
	console.log("these are the types" + types);

	$scope.close = function(result) {
	 	close(result, 500);
	 };

	 $scope.select = function(part) {
	 	PartService.select_model(part);
	 	close(part, 500);
	 };
}]);


angular.module('PartsModalCtrl', [])
	.controller('PartsModalCtrl', ['$scope', 'close', 'parts', 'PartService',
	function($scope, close, parts, PartService) {

	$scope.parts = parts;

	$scope.close = function(result) {
	 	close(result, 500);
	 };

	 $scope.select = function(part) {
	 	PartService.set_selected(part);
	 	console.log('selected ' + part.name );
	 	close(part, 500);
	 };
}]);