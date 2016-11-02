angular.module('QburstCabManagement').controller('getTripForUserController',
	['$scope','$http','$location','$rootScope',
	'dataService','getTripForUserService',
	function($scope, $http, $location, $rootScope,dataService, getTripForUserService) {
		

		$scope.addItem = function(trip) {

			var success = getTripForUserService.saveTrip(trip);
				if(success){
					$location.path('/bookcabHistory').replace();
				};

		};



	} ]);