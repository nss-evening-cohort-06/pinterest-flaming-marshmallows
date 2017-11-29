'use strict';

app.controller("AuthCtrl", function ($location, $rootScope, $scope, AuthService) {
    $scope.authenticate = () => {
    	AuthService.authenticateGoogle().then((result) => {
    		$rootScope.uid = result.user.uid;
    		console.log($rootScope.uid);
    		$scope.$apply(() => {
    			$location.url("/home");
    		});
    	}).catch((error) => {
    		console.log("error in authenticateGoogle", error);
    	});
    };
});