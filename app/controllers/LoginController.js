(function() {
 'use strict';
 	
	angular.module('QburstCabManagement').controller('LoginController' , ['$scope','$location','cabMngmtServices',
		function($scope, $location, cabMngmtServices) {
			$scope.submit = function(useremail, password){
				if($scope.useremail && $scope.password){
					cabMngmtServices.loginService($scope.useremail, $scope.password).then(function(d){
				        $scope.loginStatus = d;

				        $scope.userType = $scope.loginStatus.userType
				        switch ($scope.userType) {
				            case 'employee':
								$location.path('/bookcab');
				                break;
				            case 'approver':
				                $location.path('/triplist');
				                break;
			                case 'hr':
				                $location.path('/triplist');
				                break;
				            case 'invalid':
				            	$scope.invalidLogin = "Invalid Username or Password.";

				            default:
				        }
				    });
				}
			}
			
			
		}

	]);
 
})();