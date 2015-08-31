'use strict';
angular.module('TaskService',[]).factory('TaskService', function() {

	var tasks = [
	  {	
	  	id: "1",
	  	name: 'Sharleen Tu',
	  	acct: 'Microsoft',
	  	opp: 'Microsoft - Directory Search',
	  	subj: 'Schedule POC',
	  	status: 'open',
	  	date: '3/1/15',
	  	days: '32',
	  	priority: 'high',
	  	notes:' none',
	  	created_by: "Sharleen, 8/01/15 2:33 PM",
	  	last_edited: "Sharleen, 8/13/15, 3:50 PM"
	  },
	  {	
	  	id: "1",
	  	name: 'Justin Smith',
	  	acct: 'Target',
	  	opp: 'Target - Field Services',
	  	subj: 'Call Alisa Jordan',
	  	status: 'open',
	  	date: '3/1/15',
	  	days: '32',
	  	priority: 'high',
	  	notes:' none',
	  	created_by: "Sharleen, 8/01/15 2:33 PM",
	  	last_edited: "Sharleen, 8/13/15, 3:50 PM"
	  },
	  {	
	  	id: "1",
	  	name: 'Sharleen Tu',
	  	acct: 'Applied Materials ',
	  	opp: 'Applied Materials - Timesheet Submission',
	  	subj: 'fill out form',
	  	status: 'not started',
	  	date: '3/1/15',
	  	days: '32',
	  	priority: 'normal',
	  	notes:' none',
	  	created_by: "Sharleen, 8/01/15 2:33 PM",
	  	last_edited: "Sharleen, 8/13/15, 3:50 PM"
	  },
	  {	
	  	id: "1",
	  	name: 'Sharleen Tu',
	  	acct: 'Lam Research ',
	  	opp: 'Lam Research - HR',
	  	subj: 'meeting regarding POC',
	  	status: 'open',
	  	date: '3/1/15',
	  	days: '32',
	  	priority: 'normal',
	  	notes:' none',
	  	created_by: "Sharleen, 8/01/15 2:33 PM",
	  	last_edited: "Sharleen, 8/13/15, 3:50 PM"
	  },
	  {	
	  	id: "1",
	  	name: 'Sharleen Tu',
	  	acct: 'Virgin Airlines',
	  	opp: 'Virgin Airlines - Pilot Check in',
	  	subj: 'Call for meeting',
	  	status: 'not started',
	  	date: '3/1/15',
	  	days: '32',
	  	priority: 'normal',
	  	notes:' none',
	  	created_by: "Sharleen, 8/01/15 2:33 PM",
	  	last_edited: "Sharleen, 8/13/15, 3:50 PM"
	  },
	  {	
	  	id: "1",
	  	name: 'Sharleen Tu',
	  	acct: 'United Partners',
	  	opp: 'United Partners - Management',
	  	subj: 'Send Contracts',
	  	status: 'open',
	  	date: '3/1/15',
	  	days: '32',
	  	priority: 'high',
	  	notes:' none',
	  	created_by: "Sharleen, 8/01/15 2:33 PM",
	  	last_edited: "Sharleen, 8/13/15, 3:50 PM"
	  }
	  
	];


  return {
    all: function() {
      return tasks;
    },
    add: function(new_task) {
      return tasks.push(new_task);
    }
  };

});

