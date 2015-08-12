'use strict';
angular.module('LeadService',[]).factory('LeadService', function() {

	var leads = [
	  {	
	  	id: "1",
	  	owner: "John Smith",
	  	name: "Acme-123",
	  	title: "Designer",
	  	company: "Capriza",
	  	engage: "",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "2",
	  	owner: "Jesse Williams",
	  	name: "Acme-123",
	  	title: "Designer",
	  	company: "Capriza",
	  	engage: "",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "3",
	  	owner: "Charlie Wright",
	  	name: "- ",
	  	title: "SVP Engineering",
	  	company: "Universal Studios",
	  	engage: "",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "4",
	  	owner: "John Smith",
	  	name: "Acme-123",
	  	title: "Designer",
	  	company: "Capriza",
	  	engage: "",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "5",
	  	owner: "John Smith",
	  	name: "Acme-123",
	  	title: "Designer",
	  	company: "Capriza",
	  	engage: "",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "6",
	  	owner: "John Smith",
	  	name: "Acme-123",
	  	title: "Designer",
	  	company: "Capriza",
	  	engage: "",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }
	  
	];


  return {
    all: function() {
      return leads;
    },
    add: function(new_lead) {
      return leads.push(new_lead);
    }
  };

});

