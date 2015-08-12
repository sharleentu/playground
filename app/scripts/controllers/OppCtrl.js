'use strict';
angular.module('OppCtrl',[])
	.controller('OppCtrl', ['$scope', '$stateParams', 'OppService',
	function($scope, $stateParams, OppService) {
	$scope.opps = OppService.all();

	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":" + currentdate.getMinutes();
	var length = $scope.opps.length;
	var id = length+1;

	$scope.newOpp = {};

	$scope.add = function(newOpp) {
		OppService.add({
			id: id.toString(),
			owner: newOpp.owner,
			name: newOpp.name,
			account: newOpp.account,
			type: newOpp.type,
			phone: newOpp.phone,
			close_date: newOpp.close_date,
			stage: newOpp.stage,
			prob: newOpp.prob,
			amount: newOpp.amount,
			lead_src: newOpp.lead_src,
			desc: newOpp.desc,
			created_by: "Sharleen " + datetime,
	  		last_edited: "Sharleen " + datetime,  
			tag: "recent",
		});
		$scope.newOpp = {};
	};


	$scope.id = $stateParams.id;


	$scope.opps.forEach(function(opp) {
		if(opp.id === $scope.id) {
			$scope.opp = opp;
		}
	});

}]);

