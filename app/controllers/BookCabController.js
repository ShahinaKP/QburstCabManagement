(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('BookCabController', ['$scope','$location','$rootScope','cabMngmtServices','$q',
		function($scope, $location, $rootScope, cabMngmtServices,$q) {	
			$(function () {
                //$('#datetimepicker').datetimepicker();
				$('#datetimepicker')
					.datetimepicker({
					format: 'mm/dd/yyyy',
					startDate: '01/01/2010',
					endDate: '12/30/2020'
				});
				/*.on('changeDate', function(e) {
					// Revalidate the date field
					$('#datetimepicker').formValidation('revalidateField', 'date');
				});

				$('#datetimepicker').formValidation({
					framework: 'bootstrap',
					icon: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
					},
					fields: {
						date: {
							validators: {
								notEmpty: {
								    message: 'The date is required'
								},
								date: {
								    format: 'MM/DD/YYYY',
								    min: '01/01/2010',
								    max: '12/30/2020',
								    message: 'The date is not a valid'
								}
							}
						}
					}
				});*/
            });

			$scope.submitted = false;
	        $scope.formData = {};

	        $scope.checkForPassengers = function(isChecked){
				if(isChecked){
					$scope.formData.coPassengers = [ {name: '',
			    									  destination:''
			    									}];
				}				
			};

			$scope.addPasssenger = function() {
				$scope.formData.coPassengers.push([ {name: '',
		    									     destination:''
		    									  }]);
			};

			$scope.removePasssenger = function(index) {
				$scope.formData.coPassengers.splice(index,1);
				if(!$scope.formData.coPassengers.length){
					$scope.coPassengers.checked = false;
				}
				
			};

			$scope.loadWatchers = function() {
				$scope.watchersList = cabMngmtServices.getAllApprovers().then(function(d){
			        $scope.watchersList = d;
			    });
			};

			
			

			$scope.bookCab = function() {
				if($scope.bookform.$valid) {
					$scope.formData.userEmail = localStorage.getItem("useremail");
					$scope.formData.dateAndTime = $scope.date;
					localStorage.setItem("tripDetails", JSON.stringify($scope.formData));
					alert('Cab booked succesfully!');
					$scope.clearFields();
				}
				else {
					console.log("failed");
					$scope.submitted = true;

				}
				
			};

			$scope.clearFields = function(){
				$scope.formData = {};
			};

			$scope.cancelBooking = function() {
				
				
			};

		} ]);
	 
})();
