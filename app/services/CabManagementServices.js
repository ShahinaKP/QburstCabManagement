(function() {
 'use strict';

	var cabMngmtServices = angular.module('cabMngmtServices',[]);

	//Login service
	cabMngmtServices.service('loginService',
		function(){
			       
		}    
	);

	//cab booking service

	cabBookingApp.service('CabManagementServices', [
			'$rootScope',
			function($rootScope) {
				this.saveTrip = function(trip) {
				$rootScope.trips.push({

					name : nameOfPassenger.title,
					DateOfJourney : dateAndTime.title,
					BoardingPoint : boardingPoint.title,
					Destination : destination.title,
		
			});

	}]);


	//Get all trips service
	cabMngmtServices.service('getAllTripsService',
		function(){
			       
		}    
	);

	//Get all trips of a user service
	cabMngmtServices.service('getAllTripsForUserService',
		function(){
			       
		}    
	);

	//Get all trips of a approver service
	cabMngmtServices.service('getAllTripsForApproverService',
		function(){
			       
		}    
	);

	//update status service
	cabMngmtServices.service('updateTripStatusService',
		function(){
			       
		}    
	);

	//update vehicle details service
	cabMngmtServices.service('updateVehicleDetailsService',
		function(){
			       
		}    
	);
 
})();