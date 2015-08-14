'use strict';
angular.module('TravelCtrl',[])
	.controller('TravelCtrl', ['$scope', '$stateParams', 'TravelService', 'ModalService',
	function($scope, $stateParams, TravelService, ModalService) {
	$scope.requests = TravelService.all();

	var length = $scope.requests.length;
	var id = length+1;

	$scope.expense = {};

	$scope.send_report = function(report){
		TravelService.send_report({
			expense: report.expense,
			name: report.name,
			dept: report.dept,
			email: report.email,
			curr_date: report.curr_date,
			start_date: report.start_date,
			close_date: report.close_date,
			desc: report.desc,
			location: report.location,
			items: $scope.new_items_arr,
			status: "pending"
		});
	};

	$scope.getTotal = function() {
		var total = 0;
	    for(var i = 0; i < $scope.new_items_arr.length; i++){
	        var product = $scope.new_items_arr[i];
	        total += product.total;
	    }
	    return total;
	};

	$scope.report = [];

	$scope.report_data = TravelService.return_report();

	$scope.report.expense = $scope.report_data.expense;
	$scope.report.name = $scope.report_data.name;
	$scope.report.dept = $scope.report_data.dept;
	$scope.report.email = $scope.report_data.email;
	$scope.report.curr_date = $scope.report_data.curr_date;
	$scope.report.start_date = $scope.report_data.start_date;
	$scope.report.close_date = $scope.report_data.close_date;
	$scope.report.desc = $scope.report_data.desc;


	$scope.add_expense = function(expense) {
		for (var n = 0; n++; n < $scope.new_items_arr.length) {
			$scope.total += $scope.new_items_arr[n].total;
		}

		TravelService.add_expense({
			id: id.toString(),
			expense: expense.expense,
			name: expense.name,
			dept: expense.account,
			curr_date: expense.curr_date,
			start_date: expense.start_date,
			close_date: expense.close_date,
			desc: expense.desc,
			location: expense.location,
			total: $scope.getTotal(),
			items: $scope.new_items_arr,
			status: "pending"
		});
		$scope.expense = {};
	};

	$scope.clear = function(){
		$scope.report.expense = "";
		// $scope.report.name = $scope.report_data.name;
		// $scope.report.dept = $scope.report_data.dept;
		// $scope.report.email = $scope.report_data.email;
		// $scope.report.curr_date = $scope.report_data.curr_date;
		// $scope.report.start_date = $scope.report_data.start_date;
		// $scope.report.close_date = $scope.report_data.close_date;
		// $scope.report.desc = $scope.report_data.desc;
	};


	$scope.add = function(req) {
		TravelService.add({
			total: req.total,
			desc: req.desc,
			type: req.type,

		});
		$scope.expense = {};
	};

	$scope.new_items_arr = TravelService.new_items_arr();

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