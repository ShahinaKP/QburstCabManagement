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
    .when("/bookcabDetails", {
		templateUrl: "app/partials/bookcabDetails.html",
	 	controller: "BookCabController"
    })
    .when("/triplist", {
		templateUrl: "app/partials/tripsList.html",
	 	controller: "TripController"
    });
}]);


})();
