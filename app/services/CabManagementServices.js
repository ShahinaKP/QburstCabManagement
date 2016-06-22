(function() {
 'use strict';


	angular.module('QburstCabManagement').service('cabMngmtServices',['$http','$rootScope',
		function($http) {
			return {
				//Login service
				loginService : function(useremail, password) {
						var obj = {content:null};
						$http.get('assets/json/users.json')
						      .success(function(response) {
						      console.log(useremail, password);
						      obj.content = response;
						});
					    return obj;       
				},

				//cab booking service
				bookCabService :function() {
					$rootScope.trips.push({
						name : nameOfPassenger.title,
						DateOfJourney : dateAndTime.title,
						BoardingPoint : boardingPoint.title,
						Destination : destination.title
					});       
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