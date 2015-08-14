'use strict';
angular.module('TimesheetService',[]).factory('TimesheetService', function() {

	var favorites = [
	  {	
	  	id:'1',
	  	name: 'Meeting',
	  	duration: '2.0 hours',
	  	att: '0830',
	  	activity: '1410',
	  	wbs: '3-1200/1',
	  }, 
	  {	
	  	id:'2',
	  	name: 'Offsite',
	  	duration: '2.0 hours',
	  	att: '0830',
	  	activity: '1410',
	  	wbs: '3-1200/1',
	  }, 
	  {	
	  	id:'3',
	  	name: 'Construction',
	  	duration: '2.0 hours',
	  	att: '0830',
	  	activity: '1410',
	  	wbs: '3-1200/1',
	  }
	];

	var selected_favorite;

  return {
    all: function() {
      return favorites;
    },
    set_selected: function(favorite) {
      selected_favorite = {
      	name: favorite.name,
      	duration: favorite.duration,
      	att: favorite.att,
      	activity: favorite.activity,
      	wbs: favorite.wbs
      };
    },
    selected: function() {
    	return selected_favorite;
    }
  };

});

