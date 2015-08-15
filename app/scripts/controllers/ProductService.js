'use strict';
angular.module('ProductService',[]).factory('ProductService', function() {

	var products = [
	  {	
	  	name: "Markus ",
	  	upc: "12497684",
	  	desc: "Swivel Chair",
	  	price: "179.00"
	  },
	  {	
	  	name: "Volmar",
	  	upc: "12497684",
	  	desc: "Swivel Chair with headrest/armrests",
	  	price: "279.00"
	  },
	  {	
	  	name: "Kolon",
	  	upc: "12497684",
	  	desc: "Floor protector",
	  	price: "199.00"
	  },
	  {	
	  	name: "Patrik",
	  	upc: "12497684",
	  	desc: "Conference Chair",
	  	price: "89.00"
	  },
	  {	
	  	name: "Nominell",
	  	upc: "12497684",
	  	desc: "Swivel chair with armrests",
	  	price: "19.10"
	  },
	  {	
	  	name: "Feodor",
	  	upc: "12497684",
	  	desc: "Swivel chair with armrests",
	  	price: "79.99"
	  },
	  {	
	  	name: "Molte",
	  	upc: "12497684",
	  	desc: "Desk chair",
	  	price: "14.99"
	  },
	  {	
	  	name: "Bekant",
	  	upc: "12497684",
	  	desc: "Corner Desk-left",
	  	price: "19.10"
	  },
	  {	
	  	name: "Bekant",
	  	upc: "12497684",
	  	desc: "5 sided desk",
	  	price: "79.99"
	  },
	  {	
	  	name: "Bekant",
	  	upc: "12497684",
	  	desc: "Conference table",
	  	price: "14.99"
	  },
	  {	
	  	name: "Galant",
	  	upc: "12497684",
	  	desc: "Add-on units for desk",
	  	price: "19.10"
	  },
	  {	
	  	name: "Hemns",
	  	upc: "12497684",
	  	desc: "Secretary with add-on-unit+bookcase",
	  	price: "79.99"
	  },
	  {	
	  	name: "Alex",
	  	upc: "12497684",
	  	desc: "Desk",
	  	price: "14.99"
	  },
	  {	
	  	name: "Alex",
	  	upc: "12497684",
	  	desc: "Desk",
	  	price: "19.10"
	  },
	  {	
	  	name: "Malm",
	  	upc: "12497684",
	  	desc: "Desk with pull-out panel",
	  	price: "79.99"
	  },
	  {	
	  	name: "Micke",
	  	upc: "12497684",
	  	desc: "Add-on unit high",
	  	price: "14.99"
	  },
	  {	
	  	name: "ArkelStorp",
	  	upc: "12497684",
	  	desc: "Desk",
	  	price: "19.10"
	  },
	  {	
	  	name: "Fredde",
	  	upc: "12497684",
	  	desc: "Computer work station",
	  	price: "79.99"
	  },
	  {	
	  	name: "Liatorp",
	  	upc: "12497684",
	  	desc: "Desk",
	  	price: "14.99"
	  }
	 
	];

  return {
    all: function() {
      return products;
    }
  };

});

