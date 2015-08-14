'use strict';
angular.module('TravelService',[]).factory('TravelService', function() {

	var requests = [
	  {	
	  	id: "1",
	  	expense:"Business Trip",
	  	name: "Sharleen Tu",
	  	dept: "Product",
	  	curr_date: "8/12/2015",
	  	start_date: "8/02/2015",
	  	end_date: "8/8/2015",
	  	desc: "trip with product team for usability testing",
	  	location: "Florida",
	  	total: "$1,304.00",
	  	status: "pending",
	  	items: [{ 
		  	type: "Food",
		  	total: "$123.12",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Materials",
		  	total: "$204.00",
		  	desc: "Marketing for users"
	  	},
	  	{ 
		  	type: "Hotel",
		  	total: "$800.00",
		  	desc: "Hilton Hotel with 2 rooms"
	  	},
	  	{ 
		  	type: "Travel",
		  	total: "$176.88",
		  	desc: "Airfare from SFO to Florida - Roundtrip"
	  	}]
	  }, 
	  {	
	  	id: "2",
	  	expense:"Annual Sales Kick Off",
	  	name: "Ellen McAdams",
	  	dept: "Sales",
	  	curr_date: "8/11/2015",
	  	start_date: "6/14/2015",
	  	end_date: "6/18/2015",
	  	desc: "sales kick off at Headquarters",
	  	location: "Palo Alto",
	  	total: "$908.13",
	  	status: "pending",
	  	items: [{ 
		  	type: "Food",
		  	total: "$83.99",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Hotel",
		  	total: "$401.11",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Travel",
		  	total: "$423.12",
		  	desc: "n/a"
	  	}]
	  },  
	  {	
	  	id: "3",
	  	expense:"Business Trip to London",
	  	name: "Stephanie Do",
	  	dept: "Sales",
	  	curr_date: "8/13/2015",
	  	start_date: "6/1/2015",
	  	end_date: "6/15/2015",
	  	desc: "Visiting remote teams to meet with customers",
	  	location: "China",
	  	status: "pending",
	  	total: "$5,872.46",
	  	items: [{ 
		  	type: "Food",
		  	total: "$223.12",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Hotel",
		  	total: "$1333.12",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Ground Transportation",
		  	total: "$93.22",
		  	desc: "Taxi for office to hotel transportation"
	  	},
	  	{ 
		  	type: "Travel",
		  	total: "$5423.00",
		  	desc: "n/a"
	  	}]
	  }, 
	  {	
	  	id: "4",
	  	expense:"Innovation Conference 2014",
	  	name: "Philip Pan",
	  	dept: "Engineering",
	  	curr_date: "8/09/2015",
	  	start_date: "11/12/2014",
	  	end_date: "11/15/2014",
	  	desc: "Attend conference with sales team",
	  	location: "New York",
	  	status: "pending",
	  	total: "$2,176.78",
	  	items: [{ 
		  	type: "Food",
		  	total: "$300.12",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Hotel",
		  	total: "$455.66",
		  	desc: "n/a"
	  	},
	  	{ 
		  	type: "Materials",
		  	total: "$600.00",
		  	desc: "Materials for conference"
	  	},
	  	{ 
		  	type: "Travel",
		  	total: "$821.00",
		  	desc: "n/a"
	  	}]
	  }, 
	  {	
	  	id: "5",
	  	expense:"Company Dinner",
	  	dept: "marketing",
	  	name: "Rachel Climaco",
	  	curr_date: "8/10/2015",
	  	start_date: "12/22/2014",
	  	end_date: "12/22/2014",
	  	desc: "end of year dinner for company",
	  	location: "San Francisco",
	  	total: "$2100.00",
	  	status: "pending",
	  	items: [{ 
		  	type: "Food",
		  	total: "$2,100.00",
		  	desc: "dinner for 25 people"
	  	}]
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

