'use strict';
angular.module('OppCtrl',[])
	.controller('OppCtrl', ['$scope', '$stateParams', 'OppService',
	function($scope, $stateParams, OppService) {
	$scope.opps = OppService.all();

	console.log('length of opps outside of add function is' + $scope.opps.length);

	$scope.customFilter = function (data) {
		if (data.filter === $scope.filterItem.opp.filter) {
		  return true;
		} else {
		  return false;
		}
	};  

	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":" + currentdate.getMinutes();
	var length = $scope.opps.length;
	var id = length+1;

	$scope.newOpp = {};

	$scope.add = function(newOpp) {
		console.log('clicking add');
		console.log('new opp is' + newOpp);
		
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
		console.log('new opp name to add is' + newOpp.name);
		$scope.newOpp = {};
	};


	$scope.id = $stateParams.id;
	console.log($scope.id);
	console.log('length of opps is' + $scope.opps.length);


	$scope.opps.forEach(function(opp) {
		console.log('looking for opp');
		console.log('current opp id is' + opp.id);
		console.log(opp.name);
		if(opp.id === $scope.id) {
			console.log(opp + 'found correct opp');
			$scope.opp = opp;
		}
	});

}]);

