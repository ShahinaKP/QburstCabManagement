(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('BookCabController', ['$scope','$location','$rootScope','cabMngmtServices',
		function($scope, $location, $rootScope, cabMngmtServices) {	
			$(function () {
                $('#datetimepicker').datetimepicker();
            });
	        $scope.formData = {};
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
			$scope.checkForPassengers = function(isChecked){
				if(isChecked){
					$scope.formData.coPassengers = [ {name: '',
			    									  destination:''
			    									}];
				}				
			}

			$scope.bookCab = function() {
				$scope.formData.userEmail = localStorage.getItem("useremail")
				//localStorage.setItem("tripDetails", JSON.stringify($scope.formData));
				//$scope.clearFields();
				//alert('Cab booked succesfully!');
				//$scope.clearFields();
			};

			$scope.clearFields = function(){
				$scope.formData = {};
			};

			$scope.cancelBooking = function() {
				
				
			};

		} ]);
	 
})();
