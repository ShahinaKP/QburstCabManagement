(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('MenuController', ['$scope','$location','cabMngmtServices',
		function($scope, $location, cabMngmtServices) {	
			$scope.userEmal = localStorage.getItem("useremail");		
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
	        }

	        $scope.isActive = function (viewLocation) { 
		        return viewLocation === $location.path();
		    };	
			

		} ]);
	 
})();