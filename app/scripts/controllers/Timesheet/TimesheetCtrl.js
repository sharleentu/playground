'use strict';
angular.module('TimesheetCtrl',[])
	.controller('TimesheetCtrl', ['$scope', '$stateParams', 'ModalService', 'TimesheetService',
	function($scope, $stateParams, ModalService, TimesheetService) {

	$scope.favorites = TimesheetService.all();	
	

	// var cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// var cal_months_labels = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September',
	//                      'October', 'November', 'December'];

	var cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	var cal_current_date = new Date(); 
	console.log(cal_current_date);

	// var firstDay = new Date(this.year, this.month, 1);

	var day = cal_current_date.getDay(); //day of the current day
	var date = cal_current_date.getDate(); //date of current day

	var arr=[];
	var currentMonth = cal_current_date.getMonth()+1;
	var prevMonth = currentMonth-1;
	var nextMonth = currentMonth+1;
	var month; 
	//var index = 0;
//day =4
	for (var i=1; i++; i < day) {
		if ( (date-1) === 0 ) {
			//backtrack to previous month
			date = cal_days_in_month[prevMonth];
			month = prevMonth;
		} else {
			date-=1; 
			month = currentMonth;
		}
		day -= 1;
		// arr[index] = {day: day, month: month,};
		// index++;
		// arr.push({
		// 		day: day,
		// 		month: month,
		// 		date: date
		// });
		arr[day-i-1] = {
				day: day,
				month: month,
				date: date
		};
	}

	var reset_day = cal_current_date.getDay();
	var reset_date = cal_current_date.getDate();

	arr.push({
		day: reset_day,
		month: currentMonth,
		date: reset_date
	});

	for (var j = day; j++; j < 7 ) {
		if ( (date+1) === ( cal_days_in_month[currentMonth] + 1)) {
			date = 1;
			month = nextMonth;
		} else {
			month = currentMonth;
			reset_date+=1;
		}
		reset_day+=1;
		arr.push({
				day: reset_day,
				date: reset_date,
				month: month
		});
	}

	$scope.arr = arr;

// 	var backtrack_n = Math.abs(1-day); 
// 	var start_date = cal_current_date.getDate() - backtrack_n;

// 	function Calendar(month, year) {
//   this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
//   this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
//   this.html = '';
// }


	$scope.show_list = function(param1){
	 ModalService.showModal({
	    templateUrl: "timesheet.html",
	    controller: "ModalCtrl3",
	    inputs: {
	    	favorites: param1
	    },
	  }).then(function(modal) {
	    //it's a bootstrap element, use 'modal' to show it
	    modal.element.modal();
	    modal.close.then(function(result) {
	    	$scope.selected_favorite = TimesheetService.selected();
	  		console.log('selected favorite is ' + $scope.selected_favorite);
	      	console.log(result);
	    });
	  });
	};
}]);


angular.module('ModalCtrl3', [])
	.controller('ModalCtrl3', ['$scope', 'close', 'favorites', 'TimesheetService',
	function($scope, close, favorites, TimesheetService) {

	$scope.favorites = favorites;

	$scope.close = function(result) {
	 	close(result, 500);
	 };

	 $scope.select = function(favorite) {
	 	TimesheetService.set_selected(favorite);
	 	console.log('selected ' + favorite.name );
	 	close(favorite, 500);
	 };
}]);