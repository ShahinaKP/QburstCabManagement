(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('BookCabController', ['$scope','$location','$rootScope','cabMngmtServices','$q',
		function($scope, $location, $rootScope, cabMngmtServices,$q) {	
			$(function () {
                $('#datetimepicker').datetimepicker();
            });


	        $scope.formData = {};

	        $scope.checkForPassengers = function(isChecked){
				if(isChecked){
					$scope.formData.coPassengers = [ {name: '',
			    									  destination:''
			    									}];
				}				
			}

			$scope.addPasssenger = function() {
				$scope.formData.coPassengers.push([ {name: '',
		    									     destination:''
		    									  }]);
			}

			$scope.removePasssenger = function(index) {
				$scope.formData.coPassengers.splice(index,1);
				if(!$scope.formData.coPassengers.length){
					$scope.coPassengers.checked = false;
				}
				
			}

			$scope.loadWatchers = function() {
				$scope.watchersList = cabMngmtServices.getAllApprovers().then(function(d){
			        $scope.watchersList = d;
			    });
			}

			
			

			$scope.bookCab = function() {
				$scope.formData.userEmail = localStorage.getItem("useremail");
				$scope.formData.dateAndTime = $scope.date;
				localStorage.setItem("tripDetails", JSON.stringify($scope.formData));
				alert('Cab booked succesfully!');
				$scope.clearFields();
			};

			$scope.clearFields = function(){
				$scope.formData = {};
			};

			$scope.cancelBooking = function() {
				
				
			};

		} ]);
	 
})();
