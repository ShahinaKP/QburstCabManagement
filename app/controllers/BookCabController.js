(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('BookCabController', ['$scope','$location','$rootScope','cabMngmtServices',
		function($scope, $location, $rootScope, cabMngmtServices) {			
			console.log("gfgf", $scope.trip)
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
			console.log("ddd")

		} ]);
 
})();
