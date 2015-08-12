'use strict';
angular.module('LeadCtrl',[])
	.controller('LeadCtrl', ['$scope', '$stateParams', 'LeadService',
	function($scope, $stateParams, LeadService) {

	$scope.leads = LeadService.all();
	$scope.newLead = {};

	// $scope.add = function(newLead) {
	// 	LeadService.add({
	// 		id: id.toString(),
	// 		created_by: "Sharleen " + datetime,
	//   		last_edited: "Sharleen " + datetime,  
	// 		tag: "recent",
	// 	});
	// 	$scope.newLead = {};
	// };

	$scope.id = $stateParams.id;
	console.log($scope.id);

	$scope.leads.forEach(function(lead) {
		if(lead.id === $scope.id) {
			$scope.lead = lead;
		}
	});

}]);

