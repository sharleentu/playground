'use strict';
angular.module('TravelCtrl',[])
	.controller('TravelCtrl', ['$scope', '$stateParams', 'TravelService', 'ModalService',
	function($scope, $stateParams, TravelService, ModalService) {
	$scope.requests = TravelService.all();


	$scope.show = function(param1){
	 ModalService.showModal({
	    templateUrl: "modal_request.html",
	    controller: "ModalCtrl2",
	    inputs: {
	    	request: param1
	    },
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	      console.log(result);
	    });
	  });
	};

	$scope.show_reject = function(param1){
	 ModalService.showModal({
	    templateUrl: "modal_reject_request.html",
	    controller: "ModalCtrl2",
	    inputs: {
	    	request: param1
	    },
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	      console.log(result);
	    });
	  });
	};


	$scope.id = $stateParams.id;

	$scope.requests.forEach(function(request) {
		if(request.id === $scope.id) {
			$scope.request = request;
			$scope.items = request.items;
		}
	});


}]);


angular.module('ModalCtrl2', [])
	.controller('ModalCtrl2', ['$scope', 'close', 'TravelService', 'request',
	function($scope, close, TravelService, request) {

	$scope.request = request;

	$scope.close = function(result) {
	 	close(result, 500);
	 };

	  $scope.approve = function(result) {
	  	TravelService.approve(request.id);
	 	close(result, 500);
	  };

	   $scope.reject = function(result) {
	  	TravelService.reject(request.id);
	 	close(result, 500);
	  };
}]);