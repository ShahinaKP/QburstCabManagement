(function() {
 'use strict';
	angular.module('QburstCabManagement').service('cabMngmtServices',['$http','$rootScope','$q',
		function($http,$rootScope,$q) {
			$rootScope.trips = [];
			return {
				//Login service
				loginService : function(useremail, password) {
						var API_URL = 'http://10.9.12.122:3000/users/login';
						var deferred = $q.defer();
						var data = {
			                email: useremail, 
			                password: password
			            };
						var promise = $http.post(API_URL,data).then(function(response){							
							return response.data.result;
						}, function() {
							deferred.reject(arguments);
							return deferred.reject(arguments);
						});						

						return promise;	        
					           
				},

				//get all managers
				getAllApprovers: function() {	
						var approvers = [];

						var API_URL = 'http://10.9.12.122:3000/users/getAllApprovers';
						var deferred = $q.defer();
						var promise = $http.get(API_URL).then(function(response){							
							approvers = response.data.result;							
							deferred.resolve(approvers);
							return approvers;
						}, function() {
							deferred.reject(arguments);
							return deferred.reject(arguments);
						});						

						return promise;
						
				},

				// book a cab service
				getUserDetails: function(data) {
                    var formResponseData =  
                        {                              
                            "Name of Passenger": data.nameOfPassenger,
                            "Date and Time": data.dateAndTime,
                            "Boarding Point": data.boardingPoint,
                            "Destination": data.destination,                                                       
                        };
                        console.log("hdg",formResponseData);
                        return true;                       
                },

				//share data between services
				shareUserDataService: function() {
					var data = {
				        userEmail: '',
				        userType: ''
				    };

				    return {
				        getUserData: function () {
				            return data;
				        },
				        setUserData: function (userEmail, userType) {
				            data.userEmail = userEmail;
				            data.userType = userType;
				        }
				    };
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
			};	

	}]); 	
 
})();