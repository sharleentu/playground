'use strict';
angular.module('PtoService',[]).factory('PtoService', function() {

	var requests = [
	  {	
	  	id: "1",
	  	name: "Sharleen Tu",
	  	start_date: "6/7/2015",
	  	end_date: "6/9/2015",
	  	show: true
	  }, 
	  {	
	  	id: "2",
	  	name: "Lorie Tan",
	  	start_date: "7/1/2015",
	  	end_date: "7/7/2015",
	  	show: true
	  },  
	  {	
	  	id: "3",
	  	name: "Stephanie Do",
	  	start_date: "8/1/2015",
	  	end_date: "8/3/2015",
	  	show: true
	  }, 
	  {	
	  	id: "4",
	  	name: "Philip Pan",
	  	start_date: "8/8/2015",
	  	end_date: "8/9/2015",
	  	show: true
	  },
	  {	
	  	id: "5",
	  	name: "Rachel Climaco",
	  	start_date: "8/1/2015",
	  	end_date: "8/8/2015",
	  	show: true
	  }, 
	  {	
	  	id: "6",
	  	name: "Andy Olsen",
	  	start_date: "8/4/2015",
	  	end_date: "8/12/2015",
	  	show: true
	  }
	];

  return {
    all: function() {
      return requests;
    },
    hide: function(id) {
    	requests[id-1].show = false; 
    	return requests;
    }
  };

});

