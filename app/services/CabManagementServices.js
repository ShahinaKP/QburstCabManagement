
(function() {
 'use strict';
	angular.module('QburstCabManagement').service('cabMngmtServices',['$http','$rootScope',
		function($http,$rootScope) {
			$rootScope.trips = [];
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

				// book a cab service
				getUserDetails: function(data){
                    var formResponseData =  
                        {                              
                            "Name of Passenger": data.nameOfPassenger,
                            "Date and Time": data.dateAndTime,
                            "Boarding Point": data.boardingPoint,
                            "Destination": data.destination,                                                       
                        };
                        console.log("hdg",formResponseData)
                        return true;                       
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