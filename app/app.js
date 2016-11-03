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
		templateUrl: "app/min_partials/login.html",
	 	controller: "LoginController"
    })
    // Pages
    .when("/bookcab", {
		templateUrl: "app/min_partials/bookcab.html",
	 	controller: "BookCabController"
    })
    .when("/triplist", {
		templateUrl: "app/min_partials/tripsList.html",
	 	controller: "TripController"
    })    
    .when("/bookhistory", {
        templateUrl: "app/min_partials/cabHistory.html",
        controller: "CabHistoryController"
    })
    .otherwise({
        redirect: '/'
    });
}]);


})();
