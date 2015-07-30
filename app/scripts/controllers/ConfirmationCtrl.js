'use strict';
angular.module('ConfirmationCtrl',[])
	.controller('ConfirmationCtrl', ['$scope',
	function($scope) {

		$scope.formData = {}; 

		$scope.processForm = function() {
	        console.log('good');
	    };
	    
}]);