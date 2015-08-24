'use strict';
angular.module('OppService',[]).factory('OppService', function() {

	var opps = [
	  {	
	  	id: "1",
	  	owner: "John Smith",
	  	name: "Amazon - Mobile Ordering",
	  	account: "Amazon",
	  	type: "Existing Business",
	  	phone: "151-422-3355",
	  	addr: "12 Stanford Street, Union City, CA 12834",
	  	close_date: "9/01/2015", 
	  	stage: "Perception Analysis",
	  	prob: "70%",
	  	amount: "$192,000.00",
	  	lead_src: "Seminar - Internal",
	  	next_step: "Discuss with technical team",
	  	desc: "Great meeting, but timing is going to be next quarter",
	  	created_by: "John Smith, 8/01/15 2:33 PM",
	  	last_edited: "John Smith, 8/13/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "2",
	  	owner: "James Harris",
	  	name: "Apple - HR",
	  	account: "Apple",
	  	type: "New Business",
	  	phone: "876-123-4581",
	  	addr: "22 Serra Street, Atherton, CA 91248",
	  	close_date: "7/24/2015", 
	  	stage: "Closed Won",
	  	prob: "100%",
	  	amount: "$12,300.00",
	  	lead_src: "External Referral",
	  	next_step: "n/a",
	  	desc: "Done! Great work everyone",
	  	created_by: "James Harris, 3/03/14, 1:02 PM",
	  	last_edited: "James Harris, 7/24/15, 3:50 PM", 
	  	tag: "recent"
	  },
	  {	
	  	id: "3",
	  	owner: "Darren Row",
	  	name: "Starbucks - Customer Rewards",
	  	account: "Starbucks",
	  	type: "Existing Business",
	  	phone: "801-203-3333",
	  	addr: "476 Holly Street, Denver, CO 80216",
	  	close_date: "9/7/2015", 
	  	stage: "Proposal/Price Quote",
	  	prob: "75%",
	  	amount: "$3,900,000.00",
	  	lead_src: "Seminar - Internal",
	  	next_step: "in person meeting next week",
	  	desc: "Great meeting, we were able to move the close date up sooner than expected",
	  	created_by: "Darren Row, 6/22/2015 5:12 PM",
	  	last_edited: "Darren Row, 9/05/15, 9:12 AM", 
	  	tag: "active"
	  },
	  {	
	  	id: "4",
	  	owner: "Sara Jane",
	  	name: "Applied - Inventory",
	  	account: "Applied Materials",
	  	type: "Existing Business",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "9/25/15", 
	  	stage: "Negotiations Review",
	  	prob: "90%",
	  	amount: "$1,330,000.00",
	  	lead_src: "Seminar - Partner",
	  	next_step: "Meeting with upper management",
	  	desc: " ",
	  	created_by: "Sara Jane, 6/22/2015 5:55 PM",
	  	last_edited: "Sara Jane, 8/08/15, 12:14 AM", 
	  	tag: "active"
	  },
	  {	
	  	id: "5",
	  	owner: "Sharleen",
	  	name: "Northrop Grumman - Purchase Order Approval",
	  	account: "Northrop Grumman",
	  	type: "New Business",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "9/29/15", 
	  	stage: "Propose",
	  	prob: "40%",
	  	amount: "$1,330,000.00",
	  	lead_src: "ACO's Summit",
	  	next_step: "Discovery Call",
	  	desc: " ",
	  	created_by: "Todd Davis, 1/22/2015 2:12 PM",
	  	last_edited: "Todd Davis, 8/05/15, 11:12 AM", 
	  	tag: "recent"
	  },
	  {	
	  	id: "6",
	  	owner: "Todd Davis",
	  	name: "Eva - Flight check in",
	  	account: "Eva Airlines",
	  	type: "New Customer",
	  	phone: "801-203-3333",
	  	addr: "22364 Serra Drive, Los Angeles, CA 80216",
	  	close_date: "11/24/15", 
	  	stage: "Prospecting",
	  	prob: "10%",
	  	amount: "$1,330,000.00",
	  	lead_src: "ACO's Summit",
	  	next_step: "Discovery Call",
	  	desc: " ",
	  	created_by: "Sara Jane, 6/22/2015 5:12 PM",
	  	last_edited: "Sara Jane, 7/05/15, 9:12 AM", 
	  	tag: "mine"
	  },
	  {	
	  	id: "7",
	  	owner: "Nathaniel Lee",
	  	name: "Time - Opportunities",
	  	account: "Time Warner Cable",
	  	type: "New Customer",
	  	phone: "801-203-3333",
	  	addr: "234 Camino Real, San Diego, CA 80216",
	  	close_date: "8/7/2015", 
	  	stage: "Closed Won",
	  	prob: "100%",
	  	amount: "$230,000.00",
	  	lead_src: "Trade Show",
	  	next_step: "Done",
	  	desc: "",
	  	created_by: "Nathaniel Lee, 6/22/2015 5:12 PM",
	  	last_edited: "Nathaniel Lee, 7/05/15, 9:12 AM", 
	  	tag: "mine"
	  },
	  {	
	  	id: "8",
	  	owner: "Jillian Meyers",
	  	name: "ML - HR benefits",
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
	  	created_by: "Jillian Meyers, 6/22/2015 5:12 PM",
	  	last_edited: "Jillian Meyers, 7/05/15, 9:12 AM", 
	  	tag: "recent"
	  },
	  {	
	  	id: "9",
	  	owner: "Mariel Martin",
	  	name: "Stanford - Timesheets",
	  	account: "Stanford Dept of Education",
	  	type: "New Customer",
	  	phone: "651-098-0003",
	  	addr: "198 Choreo Way, San Diego, CA 80216",
	  	close_date: "11/12/15", 
	  	stage: "Proposal/Price Quote",
	  	prob: "50%",
	  	amount: "$197,000.00",
	  	lead_src: "Marketing Campaign",
	  	next_step: "meeting with CIO ",
	  	desc: "",
	  	created_by: "Mariel Martin, 5/22/2015 7:12 AM",
	  	last_edited: "Mariel Martin, 8/05/15, 1:19 AM", 
	  	tag: "recent"
	  },
	  {	
	  	id: "10",
	  	owner: "Keoni Madrid",
	  	name: "Instagram - HR",
	  	account: "Instagram",
	  	type: "Existing Customer",
	  	phone: "881-102-4703",
	  	addr: "981  Princeton Way, Costa Mesa, IL 80216",
	  	close_date: "9/21/15", 
	  	stage: "Negotiation Review",
	  	prob: "80%",
	  	amount: "$271,000.00",
	  	lead_src: "Public Relations",
	  	next_step: " ",
	  	desc: " ",
	  	created_by: "Keoni Madrid, 12/22/2014 11:12 AM",
	  	last_edited: "Keoni Madrid, 8/11/15, 12:19 PM", 
	  	tag: "active"
	  }


	];
	var selected_opp;

  return {
    all: function() {
      return opps;
    },
    add: function(new_opp) {
      return opps.push(new_opp);
    },
    select_opp: function(new_opp) {
    	selected_opp = new_opp;
    },
    selected_opp: function() {
    	return selected_opp;
    }
  };

});

