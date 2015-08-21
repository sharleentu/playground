'use strict';
angular.module('PartService',[]).factory('PartService', function() {

	var parts = [
	  {	
	  	id:'1',
	  	name: 'Laptop Battery for Macbook Pro',
	  	manu: 'DV Warehouse',
	  	types: [{
	  		model: "A1175",
	  		price: "38.00",
	  		info: "Laptop Battery for MacBook Pro 15.4 in.",
	  		sku: "716254"
	  	},
	  	{
	  		model: "A1189",
	  		price: "54.00",
	  		info: "Laptop Battery for MacBook Pro 17 in.",
	  		sku: "124666"
	  	},
	  	{
	  		model: "A1321",
	  		price: "59.99",
	  		info: "Laptop Battery for MacBook Pro 15 in. Unibody Mid 2009-2010 NEW",
	  		sku: "100294"
	  	},
	  	{
	  		model: "A1221",
	  		price: "24.90",
	  		info: "Laptop Battery for MacBook Pro 13 in. 2009-2012 Apple Original - NEW",
	  		sku: "123869"
	  	},
	  	{
	  		model: "A1493",
	  		price: "89.12",
	  		info: "Laptop Battery for MacBook Pro 13 in. Retina Display Late 2013",
	  		sku: "0099997"
	  	},
	  	{
	  		model: "A1281",
	  		price: "43.99",
	  		info: "Laptop Battery for MacBook Pro 15.4 in.",
	  		sku: "912711"
	  	}]
	  },
	  {	
	  	id:'2',
	  	name: 'Apple Power AC Adapter',
	  	manu: 'Best Buy',
	  	types: [{
	  		model: "922-8629",
	  		price: "8.00",
	  		info: "Apple AC Wall Adapter Duck Head - NEW",
	  		sku: "1018746"
	  	},
	  	{
	  		model: "A1343-A1172",
	  		price: "114.00",
	  		info: "Apple Original AC Adapter 85W Magsafe for Macbook & Macbook Pro",
	  		sku: "18364"
	  	},
	  	{
	  		model: "A1436",
	  		price: "91.99",
	  		info: "Apple Original AC Adapter 45 Magsafe 2 for Macbook Air 11 & 13 in. NEW",
	  		sku: "0009816"
	  	}]
	  },
	  {	
	  	id:'3',
	  	name: 'LED HD Monitor',
	  	manu: 'HP',
	  	types: [{
	  		model: "25vx",
	  		price: "38.00",
	  		info: "25 inch LED HD Monitor - BLack",
	  		sku: "7503012"
	  	},
	  	{
	  		model: "23cw",
	  		price: "54.00",
	  		info: "Pavilion 23 inch IPS LED HD Monitor - Jet Black/Natural Silver",
	  		sku: "4751006"
	  	},
	  	{
	  		model: "w2081d",
	  		price: "98.99",
	  		info: "20 inch LED HD Monitor - Silver/Black",
	  		sku: "3557051"
	  	},
	  	{
	  		model: "27vx",
	  		price: "194.90",
	  		info: "27 inch LED HD Monitor - Black",
	  		sku: "7504039"
	  	}]
	  },
	  {	
	  	id:'4',
	  	name: 'Bluetooth-Enabled Cordless Phones',
	  	manu: 'Panasonic',
	  	types: [{
	  		model: "KX-TGE233B",
	  		price: "74.99",
	  		info: "DEC 6.0 Expandable Cordless Phone System with Digital ANswering System - Black",
	  		sku: "5015144"
	  	},
	  	{
	  		model: "KX-TGD222n",
	  		price: "59.99",
	  		info: "DECT 5.0 Expandable Cordless Phone System with Digital Answering System - Champagne Gold",
	  		sku: "50111111"
	  	},
	  	{
	  		model: "KX-TGE263S",
	  		price: "99.99",
	  		info: "Link2Cell DECT 6.0 Expandable Cordless Phone System with Digital Answering System - Silver",
	  		sku: "5062028"
	  	},
	  	{
	  		model: "Kx-Tga401b",
	  		price: "31.90",
	  		info: "DECT 6.0 Plus Digital Cordless Expansion Handset - Black",
	  		sku: "1021683"
	  	},
	  	{
	  		model: "KX-TGE212B",
	  		price: "57.50",
	  		info: "DECT 6.0 1.90 GHz Cordless Phone - Black",
	  		sku: "1311798532"
	  	}]
	  },
	  {	
	  	id:'5',
	  	name: 'Cash Registers & Supplies',
	  	manu: 'OfficeMax',
	  	types: [{
	  		model: "TSP143U",
	  		price: "257.99",
	  		info: "Star Micronics Receipt Printer",
	  		sku: "823209"
	  	},
	  	{
	  		model: "IJ7200",
	  		price: "501.99",
	  		info: "Addmaster Inkjet Printer Monochrome - Desktop - Receipt Print",
	  		sku: "864006"
	  	},
	  	{
	  		model: "TM-T88V",
	  		price: "84.99",
	  		info: "Adesso 13 inch. POS Cash Drawer with Removable Cash Tray",
	  		sku: "4104999"
	  	},
	  	{
	  		model: "SP742ML",
	  		price: "316.99",
	  		info: "Star Micronics Dot Matrix Printer - Monochrome - Desktop - Receit Print",
	  		sku: "136846"
	  	},
	  	{
	  		model: "WCD-5000",
	  		price: "173.99",
	  		info: "Cash Drawer",
	  		sku: "1843555"
	  	}]
	  }
	];

	var selected_part;
	var selected_model;

  return {
    all: function() {
      return parts;
    },
    set_selected: function(part) {
      selected_part = part;
    },
    selected: function() {
    	return selected_part;
    },
    select_model: function(part) {
			selected_model = part;
    },
    selected_model: function() {
    	return selected_model;
    }
  };

});

