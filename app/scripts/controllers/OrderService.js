'use strict';
angular.module('OrderService',[]).factory('OrderService', function() {

	var orders = [
	  {	
	  	id: "1", 
	  	show: true,
	  	name: "Industrial Suppliers", 
	  	cost: "6200.00", 
	  	n_types: "1", 
	  	repname: "Seth",
	  	order_num: "4100023",
	  	account_num: "Cost Center Purchasing",
	  	date: "August 1, 2015",
	  	code: "2015", 

	  	items: [{ 
		  	addr: "212 Hamilton Ave. Palo Alto, CA",
		  	item_name: " Circuit board CS 3500",
		  	item_id: "1",
		  	sku: "121",
		  	subtotal: "695.11",
		  	n_units:"50",
		  	material:"n/a",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}]
	  },
	  {	
	  	id: "2", 
	  	show: true,
	  	name: "Costco", 
	  	cost: "391.00", 
	  	n_types: "3", 
	  	repname: "Samantha Lo",
	  	order_num: "1000293",
	  	account_num: "Not assigned",
	  	date: "August 2, 2015",
	  	code: "Not assigned", 
	  	items: [{ 
		  	addr: "212 Hamilton Ave, Palo Alto",
		  	item_name: "Kitchen Supplies",
		  	item_id: "1",
		  	sku: "2304",
		  	subtotal: "160",
		  	n_units:"30",
		  	material:"n/a",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}, 
	  	{ 
		  	addr: "212 Hamilton Ave, Palo Alto",
		  	item_name: "Office Supplies",
		  	item_id: "2",
		  	sku:"12004C",
		  	subtotal: "900",
		  	n_units:"30",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}]
	  	},
	  {	
	  	id: "3", 
	  	show: true,
	  	name: "Staples", 
	  	cost: "16920.13", 
	  	n_types: "1", 
	  	repname: "James Smith",
	  	order_num: "199274",
	  	account_num: "Not assigned",
	  	date: "September 30, 2015",
	  	code: "Not assigned", 
	  	items: [{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "Office Furniture Installation Services",
		  	item_id: "1",
		  	sku:" n/a",
		  	subtotal: "n/a",
		  	n_units:"n/a",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}]
	  	},
	  {	
	  	id: "4", 
	  	show: true,
	  	name: "Materials Co.", 
	  	cost: "135,100.00", 
	  	n_types: "1", 
	  	repname: "Anthony Carpenter",
	  	order_num: "12030049",
	  	account_num: "Raw Materials",
	  	date: "August 23, 2015",
	  	code: "2331", 
	  	items: [{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "Silicon Wafer 239 EC",
		  	item_id: "1",
		  	sku:" n/a",
		  	subtotal: "n/a",
		  	n_units:"n/a",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}]
	  	},
	  {	
	  	id: "5", 
	  	show: true,
	  	name: "Office Depot", 
	  	cost: "2887.22", 
	  	n_types: "2", 
	  	repname: "Jordan Lind",
	  	order_num: "10993099",
	  	account_num: "Cost Center Purchasing",
	  	date: "August 23, 2015",
	  	code: "2015", 
	  	items: [{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "Realspace Dawson 60",
		  	item_id: "1",
		  	sku:" n/a",
		  	subtotal: "2500",
		  	n_units:"n/a",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	},
	  	{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "Safety Flooring",
		  	item_id: "2",
		  	sku:" n/a",
		  	subtotal: "387.22",
		  	n_units:"n/a",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}]
	  	},
	  {	
	  	id: "6", 
	  	show: true,
	  	name: "Honeywell", 
	  	cost: "8839.36", 
	  	n_types: "3", 
	  	repname: "Laura Johnson",
	  	order_num: "10993099",
	  	account_num: "Cost Center Purchasing",
	  	date: "October 23, 2015",
	  	code: "2015", 
	  	items: [{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "PIR Motion Sensor with Indoor Hidden Color Camera and SD Recorder",
		  	item_id: "1",
		  	sku:" 204213275",
		  	subtotal: "2844.16",
		  	n_units:"32",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	},
	  	{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "VisionPRO Remote Indoor Sensor",
		  	item_id: "2",
		  	sku:" c7189U1005",
		  	subtotal: "614.60",
		  	n_units:"28",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	},
	  	{ 
		  	addr: "420 Florence Ave, Palo Alto",
		  	item_name: "Thunderbolt 27' Widescreen LED Monitor - Silver",
		  	item_id: "3",
		  	sku:"3143129",
		  	subtotal: "113880",
		  	n_units:"120",
		  	material_group: "n/a",
		  	office: "Palo Alto HQ",
		  	notes: "deliver between 9-5",
		  	pbxx: "n/a",
		  	skto: "skto"
	  	}]
	  }
	];

  return {
    all: function() {
      return orders;
    },
    hide: function(id) {
    	orders[id-1].show = false; 
    	return orders;
    }
  };

});

