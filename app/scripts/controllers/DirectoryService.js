'use strict';
angular.module('DirectoryService',[]).factory('DirectoryService', function() {

	var people = [
	  {	
	  	id: "1",
	  	name: 'Sharleen Tu',
	  	pos: "Intern",
	  	num: "510-523-3411",
	  	dept: "Product",
	  	loc: "United States",
	  	email: "sharleen.tu@capriza.com"
	  },
	  {	
	  	id: "2",
	  	name: 'Mayank Mehta',
	  	pos: "VP",
	  	num: "650-123-3411",
	  	dept: "Product",
	  	loc: "United States",
	  	email: "mayank@capriza.com"
	  },
	  {	
	  	id: "3",
	  	name: 'Hailey Nelson',
	  	pos: "Director",
	  	num: "900-230-0111",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "hailey.nelson@capriza.com"
	  },
	  {	
	  	id: "4",
	  	name: 'Susann Peterson',
	  	pos: "Manager",
	  	num: "367-275-4344",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "susann@capriza.com"
	  },
	  {	
	  	id: "5",
	  	name: 'Michelle Sedgwick',
	  	pos: "Regional Sales Manager",
	  	num: "818-229-3411",
	  	dept: "Sales",
	  	loc: "United States",
	  	email: "michelle@capriza.com"
	  },
	  {	
	  	id: "6",
	  	name: 'Mina Martello',
	  	pos: "Designer",
	  	num: "776-910-0111",
	  	dept: "Product",
	  	loc: "United States",
	  	email: "mina.martello@capriza.com"
	  },
	  {	
	  	id: "7",
	  	name: 'Luke Mckinsey',
	  	pos: "Customer Support",
	  	num: "117-222-4333",
	  	dept: "Professional Services",
	  	loc: "United States",
	  	email: "mckinsey.luke@capriza.com"
	  },
	  {	
	  	id: "8",
	  	name: 'Ollie Shapiro',
	  	pos: "Regional Sales Manager",
	  	num: "128-650-3411",
	  	dept: "Sales",
	  	loc: "United States",
	  	email: "ollie.shapiro@capriza.com"
	  },
	  {	
	  	id: "9",
	  	name: 'Tanner Lee',
	  	pos: "Product Marketing Manager",
	  	num: "808-910-0111",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "tanner@capriza.com"
	  },
	  {	
	  	id: "10",
	  	name: 'Alison Lindt',
	  	pos: "Software Engineer",
	  	num: "408-992-4333",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "alison.lindt@capriza.com"
	  },
	  {	
	  	id: "11",
	  	name: 'Jerry Garden',
	  	pos: "Sales Engineer",
	  	num: "650-231-3466",
	  	dept: "Pre-Sales",
	  	loc: "United States",
	  	email: "jerry.garden@capriza.com"
	  },
	  {	
	  	id: "12",
	  	name: 'Sabrina Brannum',
	  	pos: "Content Editor",
	  	num: "650-432-2333",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "tanner@capriza.com"
	  },
	  {	
	  	id: "13",
	  	name: 'Lilly Henderson',
	  	pos: "UX Designer",
	  	num: "650-520-4322",
	  	dept: "Product",
	  	loc: "United States",
	  	email: "lilly.jemderspm@capriza.com"
	  },
	  {	
	  	id: "14",
	  	name: 'Ruth Borba',
	  	pos: "VP",
	  	num: "650-650-3411",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "ruth.borba@capriza.com"
	  },
	  {	
	  	id: "15",
	  	name: 'Theresa Lee',
	  	pos: "recruiter",
	  	num: "650-129-2311",
	  	dept: "Human Resources",
	  	loc: "United States",
	  	email: "theresalee@capriza.com"
	  },
	  {	
	  	id: "16",
	  	name: 'Harry Wright',
	  	pos: "Product Manager",
	  	num: "650-111-4822",
	  	dept: "Product",
	  	loc: "United States",
	  	email: "harry.wright@capriza.com"
	  },
	  {	
	  	id: "17",
	  	name: 'Brian James',
	  	pos: "Solution Architect",
	  	num: "510-250-1133",
	  	dept: "Professional Services",
	  	loc: "United States",
	  	email: "brian.james@capriza.com"
	  },
	  {	
	  	id: "18",
	  	name: 'Jamie Rodriguez',
	  	pos: "android developer",
	  	num: "650-565-5565",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "jamie.Rodriguez@capriza.com"
	  },
	  {	
	  	id: "19",
	  	name: 'Roselyn Chang',
	  	pos: "Software Engineer",
	  	num: "650-520-4322",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "roselyn.chang@capriza.com"
	  },
	  {	
	  	id: "20",
	  	name: 'Sasha Fields',
	  	pos: "VP",
	  	num: "650-155-3411",
	  	dept: "Finance",
	  	loc: "United States",
	  	email: "sasha.fields@capriza.com"
	  },
	  {	
	  	id: "21",
	  	name: 'Eric Haas',
	  	pos: "recruiter",
	  	num: "650-409-9091",
	  	dept: "Human Resources",
	  	loc: "United States",
	  	email: "eric.haas@capriza.com"
	  },
	  {	
	  	id: "22",
	  	name: 'Laura Wilson',
	  	pos: "Software Engineer",
	  	num: "650-520-4322",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "laura.wilson@capriza.com"
	  },
	  {	
	  	id: "23",
	  	name: 'Tanya Le',
	  	pos: "CMO",
	  	num: "650-155-3635",
	  	dept: " ",
	  	loc: "United States",
	  	email: "tanya@capriza.com"
	  },
	  {	
	  	id: "24",
	  	name: 'Danny Charleston',
	  	pos: "CTO",
	  	num: "650-337-2191",
	  	dept: " ",
	  	loc: "United States",
	  	email: "danny@capriza.com"
	  },
	  {	
	  	id: "25",
	  	name: 'Pam Gillman',
	  	pos: "Product Manager",
	  	num: "650-520-4322",
	  	dept: "Product",
	  	loc: "United States",
	  	email: "pam.gillman@capriza.com"
	  },
	  {	
	  	id: "26",
	  	name: 'Walter Appelbaum',
	  	pos: "Solution Architect",
	  	num: "650-155-3635",
	  	dept: "Pre-Sales",
	  	loc: "United States",
	  	email: "walter.appelbaum@capriza.com"
	  },
	  {	
	  	id: "27",
	  	name: 'Bethany Holms',
	  	pos: "Accountant",
	  	num: "650-282-0091",
	  	dept: "Finance",
	  	loc: "United States",
	  	email: "bethany.holms@capriza.com"
	  },
	  {	
	  	id: "28",
	  	name: 'Robert Engle',
	  	pos: "Software Engineer",
	  	num: "650-992-4333",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "robert.engle@capriza.com"
	  },
	  {	
	  	id: "29",
	  	name: 'Andrew Johnson',
	  	pos: "Sales Engineer",
	  	num: "650-231-3466",
	  	dept: "Pre-Sales",
	  	loc: "United States",
	  	email: "andrew.j@capriza.com"
	  },
	  {	
	  	id: "30",
	  	name: 'Laurie Harlin',
	  	pos: "Area Vice President - West",
	  	num: "650-432-2333",
	  	dept: "Sales",
	  	loc: "United States",
	  	email: "laurie.harlin@capriza.com"
	  },
	  {	
	  	id: "31",
	  	name: 'Andy Horimoto',
	  	pos: "Software Engineer",
	  	num: "650-999-4322",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "andy.horimoto@capriza.com"
	  },
	  {	
	  	id: "32",
	  	name: 'Lucia Hirsch',
	  	pos: "Customer Success Manager",
	  	num: "650-135-7791",
	  	dept: "Professional Services",
	  	loc: "United States",
	  	email: "lucia.hirsch@capriza.com"
	  },
	  {	
	  	id: "33",
	  	name: 'Rebekah Seabrooks',
	  	pos: "VP",
	  	num: "650-421-3391",
	  	dept: "Professional Services",
	  	loc: "United States",
	  	email: "rebekah@capriza.com"
	  },
	  {	
	  	id: "34",
	  	name: 'Jason Ayers',
	  	pos: "VP",
	  	num: "650-520-4322",
	  	dept: "R&D",
	  	loc: "United States",
	  	email: "jason.ayers@capriza.com"
	  },
	  {	
	  	id: "35",
	  	name: 'Barbara Shanley',
	  	pos: "Digital Marketing Manager",
	  	num: "650-155-3411",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "barbara.shanley@capriza.com"
	  },
	  {	
	  	id: "36",
	  	name: 'Ellen Silvia',
	  	pos: "Inbound Marketing",
	  	num: "650-409-9091",
	  	dept: "Marketing",
	  	loc: "United States",
	  	email: "ellen.silvia@capriza.com"
	  },
	  {	
	  	id: "37",
	  	name: 'Richard Matthews',
	  	pos: "Sales Manager",
	  	num: "510-523-3411",
	  	dept: "Sales",
	  	loc: "United States",
	  	email: "richard.matthews@capriza.com"
	  },
	  {	
	  	id: "38",
	  	name: 'Jeff Xu',
	  	pos: "Senior Recruiter",
	  	num: "650-123-3411",
	  	dept: "Human Resources",
	  	loc: "United States",
	  	email: "mayank@capriza.com"
	  },
	  {	
	  	id: "39",
	  	name: 'Daniel Naut',
	  	pos: "Office Manager",
	  	num: "900-230-0111",
	  	dept: "HUman Resources",
	  	loc: "United States",
	  	email: "Daniel Naut@capriza.com"
	  }
	];


  return {
    all: function() {
      return people;
    },
    add: function(new_person) {
      return people.push(new_person);
    }
  };

});

