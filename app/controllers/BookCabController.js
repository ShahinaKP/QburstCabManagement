(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('BookCabController', ['$scope','$location','$rootScope','cabMngmtServices',
		function($scope, $location, $rootScope, cabMngmtServices) {	

			/*$scope.userEmal = localStorage.getItem("useremail");		
			$scope.userType = localStorage.getItem("usertype");	
	        switch ($scope.userType) {
	            case 'employee':
					$scope.bookScreenTabType = 'forEmployee';
	                break;
	            case 'approver':
	                $scope.bookScreenTabType = 'forApprover';
	                break;
                case 'hr':
	                $scope.bookScreenTabType = 'forHr';
	                break;	            
	            default:
	        }*/

			$scope.add = function() {

				var success = cabMngmtServices.getUserDetails($scope.trip);

				
					if(success){
						localStorage.setItem('trip', JSON.stringify($scope.trip));
						$location.path('/cabHistory');
					};

			};
			$(function () {
                $('#datetimepicker1').datetimepicker();
            });

		} ]);
	 
})();
