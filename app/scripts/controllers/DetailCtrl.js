'use strict';
angular.module('DetailCtrl',[]).controller('DetailCtrl', ['$scope', '$stateParams', 'OrderService', 'ModalService',
	function($scope, $stateParams, OrderService, ModalService) {

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

