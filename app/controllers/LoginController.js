(function() {
 'use strict';
 	
	angular.module('QburstCabManagement').controller('LoginController' , ['$scope','$location','cabMngmtServices',
		function($scope, $location, cabMngmtServices) {
			$scope.submit = function(useremail, password){
				if($scope.useremail && $scope.password){
					cabMngmtServices.loginService($scope.useremail, $scope.password).then(function(d){
				        $scope.loggedData = d;
						$scope.userType = d.role;
						localStorage.setItem("usertype", $scope.userType);
						localStorage.setItem("userId", d.id);
						$location.path('/bookcab');
				        /*if($scope.loginStatus.userType != 'invalid'){
				        	localStorage.setItem("useremail", $scope.useremail);
				        	localStorage.setItem("usertype", $scope.loginStatus.userType);
				        	$location.path('/bookcab');
				        }
				        else{
				        	$scope.invalidLogin = "Invalid Username or Password.";
				        }*/
				        
				    });
				}
			}
			
			
		}

	]);
 
})();