'use strict';
angular.module('OppService',[]).factory('OppService', function() {

	var opps = [
	  {	
	  	id: "1",
	  	owner: "John Smith",
	  	name: "Acme-123",
	  	account: "Amazon",
	  	type: "Existing Business",
	  	phone: "",
	  	addr: "12 Stanford Street, Union City, CA 12834",
	  	close_date: "7/21/2015", 
	  	stage: "Perception Analysis",
	  	prob: "70%",
	  	amount: "$192,000.00",
	  	lead_src: "Seminar - Internal",
	  	next_step: "Discuss with technical team",
	  	desc: "Great meeting, but timing is going to be next quarter",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "2",
	  	owner: "John Smith",
	  	name: "Apple Palo Alto",
	  	account: "Apple",
	  	type: "",
	  	phone: "",
	  	addr: "",
	  	close_date: "7/7/2015", 
	  	stage: "",
	  	prob: "",
	  	amount: "",
	  	lead_src: "",
	  	next_step: "",
	  	desc: "",
	  	created_by: "",
	  	last_edited: "", 
	  	tag: "recent"
	  },
	  {	
	  	id: "3",
	  	owner: "Darren Row",
	  	name: "Acme-1001",
	  	account: "Acme Corporation",
	  	type: "Existing Business",
	  	phone: "801-203-3333",
	  	addr: "476 Holly Street, Denver, CO 80216",
	  	close_date: "7/7/2015", 
	  	stage: "Proposal/Price Quote",
	  	prob: "75%",
	  	amount: "$3,900,000.00",
	  	lead_src: "Seminar - Internal",
	  	next_step: "in person meeting next week",
	  	desc: "Great meeting, we were able to move the close date up sooner than expected",
	  	created_by: "Capriza, 6/22/2015 5:12 PM",
	  	last_edited: "Capriza, 7/05/15, 9:12 AM", 
	  	tag: "active"
	  },
	  {	
	  	id: "4",
	  	owner: "Sara Jane",
	  	name: "ATT",
	  	account: "3C Systems",
	  	type: "",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "6/7/2015", 
	  	stage: "Negotiations Review",
	  	prob: "90%",
	  	amount: "$1,330,000.00",
	  	lead_src: "",
	  	next_step: "",
	  	desc: "",
	  	created_by: "Sara Jane, 6/22/2015 5:12 PM",
	  	last_edited: "Sara Jane, 7/05/15, 9:12 AM", 
	  	tag: "active"
	  },
	  {	
	  	id: "5",
	  	owner: "Todd Davis",
	  	name: "ABC Talon Opportunity",
	  	account: "ABC",
	  	type: "New Customer",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "8/7/2015", 
	  	stage: "Propose",
	  	prob: "40%",
	  	amount: "$1,330,000.00",
	  	lead_src: "ACO's Summit",
	  	next_step: "Discovery Call",
	  	desc: "",
	  	created_by: "Sara Jane, 6/22/2015 5:12 PM",
	  	last_edited: "Sara Jane, 7/05/15, 9:12 AM", 
	  	tag: "recent"
	  },
	  {	
	  	id: "6",
	  	owner: "Todd Davis",
	  	name: "Edge SLA",
	  	account: "Edge Communications",
	  	type: "New Customer",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "8/7/2015", 
	  	stage: "Closed Won",
	  	prob: "100%",
	  	amount: "$1,330,000.00",
	  	lead_src: "ACO's Summit",
	  	next_step: "Discovery Call",
	  	desc: "",
	  	created_by: "Sara Jane, 6/22/2015 5:12 PM",
	  	last_edited: "Sara Jane, 7/05/15, 9:12 AM", 
	  	tag: "mine"
	  },
	  {	
	  	id: "7",
	  	owner: "Nathaniel Lee",
	  	name: "Time",
	  	account: "Time",
	  	type: "New Customer",
	  	phone: "801-203-3333",
	  	addr: "234 Camino Real, San Diego, CA 80216",
	  	close_date: "8/7/2015", 
	  	stage: "Closed Won",
	  	prob: "100%",
	  	amount: "$230,000.00",
	  	lead_src: "Trade Show",
	  	next_step: "",
	  	desc: "",
	  	created_by: "Sara Jane, 6/22/2015 5:12 PM",
	  	last_edited: "Sara Jane, 7/05/15, 9:12 AM", 
	  	tag: "mine"
	  },
	  {	
	  	id: "8",
	  	owner: "Jillian Meyers",
	  	name: "Movement Lifestyle",
	  	account: "Movement Lifestyle",
	  	type: "New Customer",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "8/7/2015", 
	  	stage: "Discovery",
	  	prob: "20%",
	  	amount: "$2,000.00",
	  	lead_src: "Marketing Campaign",
	  	next_step: "Discovery Call",
	  	desc: "",
	  	created_by: "Sara Jane, 6/22/2015 5:12 PM",
	  	last_edited: "Sara Jane, 7/05/15, 9:12 AM", 
	  	tag: "recent"
	  }

	];


  return {
    all: function() {
      return opps;
    },
    add: function(new_opp) {
      return opps.push(new_opp);
    }
  };

});

