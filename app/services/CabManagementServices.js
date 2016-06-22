(function() {
 'use strict';

 	// var cabBookingApp = angular.module('QburstCabManagement',[]); 

	angular.module('QburstCabManagement').service('cabMngmtServices',['$http',
		function($http) {
			return {
				//Login service
		loginService : function(useremail, password) {
				var obj = {content:null};
				$http.get('assets/json/users.json')
				      .success(function(response) {
				      console.log(response);
				      obj.content = response;
				});
			    return obj;       
		},

		//cab booking service
		bookCabService :function() {
				       
		}, 


		//Get all trips service
		getAllTripsService : function() {
				       
		},  

		//Get all trips of a user service
		getAllTripsForUserService :function() {
				       
		},  

		//Get all trips of a approver service
		getAllTripsForApproverService : function() {
				       
		},  

		//update status service
		updateTripStatusService :function() {
				       
		},  

		//update vehicle details service
		updateVehicleDetailsService : function() {
				       
		} 

			}
		

	}]); 
 
})();