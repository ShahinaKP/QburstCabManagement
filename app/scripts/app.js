(function() {
 'use strict';

 var cabBookingApp = angular.module('QburstCabManagement',['ngRoute']);

/**
 * Configure the Routes
 */
cabBookingApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {
		templateUrl: "app/partials/login.html",
	 	controller: "LoginController"
    })
    // Pages
    .when("/bookcab", {
		templateUrl: "app/partials/bookcabDetails.html",
	 	controller: "BookCabController"
    })
    .when("/triplist", {
		templateUrl: "app/partials/tripsList.html",
	 	controller: "TripController"
    })    
    .when("/cabHistory", {
        templateUrl: "app/partials/cabHistory.html",
        controller: "BookCabController"
    })
    .otherwise({
        redirect: '/'
    });
}]);


})();
