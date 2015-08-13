'use strict';
angular.module('LeadService',[]).factory('LeadService', function() {

	var leads = [
	  {	
	  	id: "1",
	  	owner: "John Smith",
	  	name: "John Smith",
	  	title: "Designer",
	  	company: "Capriza",
	  	engage: "3/23/2015",
	  	phone: "650-112-3456",
	  	email: "john@capriza.com",
	  	status: "Qualified",
	  	rating: "Hot",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1204",
	  	desc: "Capriza is a great opportunity for us",
	  	industry: "",
	  	lead_src: "Trade Show",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "2",
	  	owner: "Sharleen Tu",
	  	name: "Jesse Williams",
	  	title: "Sales",
	  	company: "Wells Fargo",
	  	engage: "6/6/2015",
	  	phone: "120-332-3333",
	  	email: "jesse@gmail.com",
	  	status: "open",
	  	rating: "",
	  	addr: "400 Hamilton Ave, Palo Alto, CA",
	  	website: "capriza.com",
	  	revenue: "$8,000,000",
	  	n_employee: "1234",
	  	desc: "",
	  	industry: "",
	  	lead_src: "",
	  	created_by: "Capriza, 5/08/15 2:33 PM",
	  	last_edited: "Capriza, 5/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "3",
	  	owner: "Sharleen Tu",
	  	name: " Jonathon Hen",
	  	title: "SVP Engineering",
	  	company: "Universal Studios",
	  	engage: "1/2/2014",
	  	phone: "909-919-9247",
	  	email: "jonathon@universal.com",
	  	status: "Open",
	  	rating: "Warm",
	  	addr: "12 Universal Dr, Hollywood, CA",
	  	website: "universalstudios.com",
	  	revenue: "$82,000,000",
	  	n_employee: "45,564",
	  	desc: "",
	  	industry: "Entertainment",
	  	lead_src: "Advertisement",
	  	created_by: "Capriza, 4/08/15 2:33 PM",
	  	last_edited: "Capriza, 4/19/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "4",
	  	owner: "Demo Account",
	  	name: "Aaron Sing",
	  	title: "Consultant",
	  	company: "Coca Cola",
	  	engage: "8/2/2015",
	  	phone: "150-292-3056",
	  	email: "aaron@cocacola.com",
	  	status: "Open",
	  	rating: "Warm",
	  	addr: "2400 Garage Drive, Fremont, CA",
	  	website: "cocacola.com",
	  	revenue: "$12,000,000",
	  	n_employee: "391,928",
	  	desc: "",
	  	industry: "Beverages",
	  	lead_src: "Public Relations",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "5",
	  	owner: "Kevin Smith",
	  	name: "Kevin Smith",
	  	title: "Engineer",
	  	company: "Stanford",
	  	engage: "1/1/2015",
	  	phone: "650-112-3456",
	  	email: "kevin@stanford.edu",
	  	status: "Qualified",
	  	rating: "Hot",
	  	addr: "10 Stanford Ave, Palo Alto, CA",
	  	website: "stanford.edu",
	  	revenue: "$200,000",
	  	n_employee: "23,434",
	  	desc: "",
	  	industry: "Academia",
	  	lead_src: "External Referral",
	  	created_by: "Capriza, 8/08/15 2:33 PM",
	  	last_edited: "Capriza, 8/09/15, 3:50 PM",
	  	tag: "recent"
	  }, 
	  {	
	  	id: "6",
	  	owner: "Jake Magg",
	  	name: "Jake Magg",
	  	title: "Sales Engineer",
	  	company: "TF Construction",
	  	engage: "",
	  	phone: "900-194-1156",
	  	email: "jakemagg@capriza.com",
	  	status: "open",
	  	rating: "",
	  	addr: "19245 Corolla Ave, Cupertino, CA",
	  	website: "capriza.com",
	  	revenue: "$120,000",
	  	n_employee: "344",
	  	desc: "",
	  	industry: "Construction",
	  	lead_src: "Word of Mouth",
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

