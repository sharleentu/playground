'use strict';
angular.module('PtoCtrl',[])
	.controller('PtoCtrl', ['$scope', '$stateParams', 'PtoService', 'ModalService',
	function($scope, $stateParams, PtoService, ModalService) {
	$scope.requests = PtoService.all();

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
}]);


angular.module('ModalCtrl2', [])
	.controller('ModalCtrl2', ['$scope', 'close', 'PtoService', 'request',
	function($scope, close, PtoService, request) {

	$scope.request = request;

	$scope.close = function(result) {
	 	close(result, 500);
	 };

	  $scope.hide = function(result) {
	  	PtoService.hide(request.id);
	 	close(result, 500);
	  };
}]);