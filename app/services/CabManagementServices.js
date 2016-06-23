(function() {
 'use strict';


	angular.module('QburstCabManagement').service('cabMngmtServices',['$http','$rootScope',
		function($http) {
			return {
				//Login service
				loginService : function(useremail, password) {
						var userObj = {};						
						// $http returns a promise, which has a then function, which also returns a promise
						var promise = $http.get('assets/json/users.json').then(function (response) {
							// The then function here is an opportunity to modify the response
							for (var i = 0; i < response.data.users.length; i++) {
							    if (response.data.users[i].userEmail == useremail && 
							    	response.data.users[i].password == password) {
							    	userObj = {};
							    	userObj.userType = response.data.users[i].userType;
							    	userObj.loginMessage = "Logged in succesfully";
							    	break;
							    }
							    else{
							    	userObj = {};
							    	userObj.userType = "invalid";
							    	userObj.loginMessage = "Login Failed";
							    }
							}
							// The return value gets picked up by the then in the controller.
							return userObj;
						});
						// Return the promise to the controller
						return promise;	        
					           
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