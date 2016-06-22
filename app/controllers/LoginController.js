(function() {
 'use strict';
 	// var cabBookingApp = angular.module('QburstCabManagement',[]); 
 	
	angular.module('QburstCabManagement').controller('LoginController' , ['$scope','$location','cabMngmtServices',
		function($scope, $location, cabMngmtServices) {
			$scope.submit = function(useremail, password){
				cabMngmtServices.loginService($scope.useremail, $scope.password);
			} 
			
		}

	]);
 
})();