"use strict";

app.controller("SingleBoardCtrl", function($location, $routeParams, $rootScope, $scope, PinterestService) {

	const showPinsForSingleBoard = () => {
		PinterestService.getAllPinsWithSingleBoard($routeParams.id).then((results) => {
            $scope.pinsWithIds = results;
            PinterestService.getSingleBoard($routeParams.id).then((results) => {
                $scope.boardName = results.data.name;
            }).catch(() => {
                
            });
            
        });
	};

	showPinsForSingleBoard();

	$scope.goToCreatePin = () => {
        $location.path(`/pincreate/${$routeParams.id}`);
    };
<<<<<<< HEAD

	$scope.makeTried = (pin, pinId) => {
	  	console.log("pin in makeTried", pin);
	    pin.tried = pin.tried ? false : true;
	    let triedPin = PinterestService.createPinObj(pin);
	    PinterestService.updatePin(triedPin, pinId).then(() => {
	      showPinsForSingleBoard();
	    }).catch((err) => {
	      console.log('error in updatePin:', err);
	    });
  };
	
  	$scope.editPin = (pinId) => {
  		console.log("pinId in editPin", pinId);
    	$location.path(`pins/edit/${pinId}`);
    };




=======
>>>>>>> master
});