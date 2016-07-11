(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('MenuController', ['$scope','$location','cabMngmtServices',
		function($scope, $location, cabMngmtServices) {	
			$scope.userType = localStorage.getItem("usertype");	
	        switch ($scope.userType) {
	            case '1':
					$scope.bookScreenTabType = 'forEmployee';
	                break;
	            case '3':
	                $scope.bookScreenTabType = 'forApprover';
	                break;
                case '2':
	                $scope.bookScreenTabType = 'forHr';
	                break;	            
	            default:
	        }

	        $scope.isActive = function (viewLocation) { 
		        return viewLocation === $location.path();
		    };	
			

		} ]);
	 
})();