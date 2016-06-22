// (function() {
//  'use strict';

// 	cabBookingApp.controller('BookCabController' , ['$scope','bookCabService',
// 		function($scope, bookCabService){

// 		}

// 	]);
 
// })();




cabBookingApp.controller('BookCabController',
['$scope','$http','$location','$rootScope',
'dataService','getTripForUserService',
function($scope, $http, $location, $rootScope,dataService, getTripForUserService) {
	

	$scope.add = function(trip) {

		var success = getTripForUserService.saveTrip(trip);
			if(success){
				$location.path('/cabHistory').replace();
			};

	};
} ]);