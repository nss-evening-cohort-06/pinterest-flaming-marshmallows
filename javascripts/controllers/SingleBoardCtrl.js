"use strict";

app.controller("SingleBoardCtrl", function($location, $routeParams, $rootScope, $scope, PinterestService) {

	const showPinsForSingleBoard = () => {
		PinterestService.getAllPinsWithSingleBoard($routeParams.id).then((results) => {
            $scope.pinsWithIds = results;
            $scope.boardName = $routeParams.id;
            console.log("in get single board pinsWithIds", $scope.pinsWithIds);
        });
	};

	showPinsForSingleBoard();

	$scope.goToCreatePin = () => {
        $location.path(`/pincreate/${$routeParams.id}`);
    };

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




});