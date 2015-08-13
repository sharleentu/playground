'use strict';
angular.module('angularTestApp.controllers',[])
	.controller('PurchaseCtrl', ['$scope', 'OrderService', 'ModalService',
	function($scope, OrderService, ModalService) {
	$scope.orders = OrderService.all();


	$scope.show = function(param1){
	 ModalService.showModal({
	    templateUrl: "modal_approve.html",
	    controller: "ModalCtrl",
	    inputs: {
	    	order: param1
	    },
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	      console.log(result);
	    });
	  });
	};

	$scope.show_reject = function(param){
	 ModalService.showModal({
	    templateUrl: "modal_reject.html",
	    controller: "ModalCtrl",
	     inputs: {
	    	order: param
	    }

	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	      console.log(result);
	    });
	  });
	};
}]);

angular.module('ModalCtrl', [])
	.controller('ModalCtrl', ['$scope', 'close', 'OrderService', 'order',
	function($scope, close, OrderService, order) {

	$scope.order = order;

	$scope.close = function(result) {
	 	// $scope.order.show = false;
	 	order.show = result;
	 	close(result, 500);

	 	// window.location.reload(); 
	  };

	  $scope.hide = function(result) {
	  	OrderService.approve(order.id);
	 	close(result, 500);

	 	// window.location.reload(); 
	  };
}]);