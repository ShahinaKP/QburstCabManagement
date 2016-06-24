(function() {
 'use strict';
 	
	angular.module('QburstCabManagement').controller('LoginController' , ['$scope','$location','cabMngmtServices',
		function($scope, $location, cabMngmtServices) {
			$scope.submit = function(useremail, password){
				if($scope.useremail && $scope.password){
					cabMngmtServices.loginService($scope.useremail, $scope.password).then(function(d){
				        $scope.loginStatus = d;

				        if($scope.loginStatus.userType != 'invalid'){
				        	//share user data
							//cabMngmtServices.shareUserDataService.setUserData($scope.useremail, $scope.loginStatus.userType);
				        	localStorage.setItem("useremail", $scope.useremail);
				        	localStorage.setItem("usertype", $scope.loginStatus.userType);
				        	$location.path('/bookcab');
				        }
				        else{
				        	$scope.invalidLogin = "Invalid Username or Password.";
				        }
				        
				    });
				}
			}
			
			
		}

	]);
 
})();