'use strict';
angular.module('PtoService',[]).factory('PtoService', function() {

	var requests = [
	  {	
	  	id: "1",
	  	name: "Sharleen Tu",
	  	dept: "Product",
	  	start_date: "8/22/2015",
	  	end_date: "9/9/2015",
	  	total: "19",
	  	status: "pending",
	  	reason: "Vacation",
	  	show: true
	  }, 
	  {	
	  	id: "2",
	  	name: "Lorie Tan",
	  	dept: "Product",
	  	start_date: "9/1/2015",
	  	end_date: "9/10/2015",
	  	total: "10",
	  	status: "pending",
	  	reason: "Vacation",
	  	show: true
	  },  
	  {	
	  	id: "3",
	  	name: "Stephanie Do",
	  	dept: "Sales",
	  	start_date: "8/1/2015",
	  	end_date: "11/12/2015",
	  	total: "102",
	  	status: "pending",
	  	reason: "Maternity Leave",
	  	show: true
	  }, 
	  {	
	  	id: "4",
	  	name: "Philip Pan",
	  	dept: "Engineering",
	  	start_date: "8/18/2015",
	  	end_date: "8/29/2015",
	  	total: "11",
	  	status: "pending",
	  	reason: "Vacation",
	  	show: true
	  },
	  {	
	  	id: "5",
	  	dept: "Sales",
	  	name: "Rachel Climaco",
	  	start_date: "8/1/2015",
	  	end_date: "8/3/2015",
	  	total: "3",
	  	status: "pending",
	  	reason: "Sick",
	  	show: true
	  }, 
	  {	
	  	id: "6",
	  	name: "Andy Olsen",
	  	dept: "Mobile",
	  	start_date: "8/31/2015",
	  	end_date: "10/31/2015",
	  	total: "61",
	  	status: "pending",
	  	reason: "Paternity Leave",
	  	show: true
	  }, 
	  {	
	  	id: "7",
	  	name: "Maryanne Anderson",
	  	dept: "Marketing",
	  	start_date: "8/21/2015",
	  	end_date: "8/31/2015",
	  	total: "10",
	  	status: "pending",
	  	reason: "Vacation",
	  	show: true
	  }, 
	  {	
	  	id: "8",
	  	name: "Torin Baker",
	  	dept: "R&D",
	  	start_date: "10/21/2015",
	  	end_date: "10/25/2015",
	  	total: "4",
	  	status: "pending",
	  	reason: "Vacation",
	  	show: true
	  }
	];

  return {
    all: function() {
      return requests;
    },
    approve: function(id) {
    	requests[id-1].status = "approved"; 
    	return requests;
    },
    reject: function(id) {
    	requests[id-1].status = "rejected"; 
    	return requests;
    }
  };

});

