'use strict';
angular.module('OppDetailCtrl',[]).controller('OppDetailCtrl', ['$scope', '$stateParams', 'OppService',
	function($scope, $stateParams, OppService) {

	$scope.id = $stateParams.id;
	$scope.opps = OppService.all();
	console.log('opp service' + $scope.opps.length);

	console.log($scope.id);

	$scope.opps.forEach(function(opp) {
		console.log(opp.id);
		if(opp.id === $scope.id) {
			$scope.opp = opp;
		}
	});
}]);

