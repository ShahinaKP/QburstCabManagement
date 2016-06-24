(function() {
 'use strict';

	angular.module('QburstCabManagement').controller('CabHistoryController', ['$scope','$location','$rootScope','cabMngmtServices',
		function($scope, $location, $rootScope, cabMngmtServices) {			
			$scope.tripDetails = JSON.parse(localStorage.getItem('trip'));

		} ]);
 
})();



