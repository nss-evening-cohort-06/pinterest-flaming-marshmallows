'use strict';

app.controller("EditCtrl", function ($location, $routeParams, $scope, PinterestService) {
    
    const getPinInfo = () => {
    PinterestService.getSinglePin($routeParams.id).then((results) => {
      $scope.pin = results.data;
    }).catch((error) => {
      console.log("error in getSinglePin", error);
    });
  };

  getPinInfo();

  $scope.submitNewPin = (pin, pinId) => {
		let pinToEdit = PinterestService.createPinObj(pin);
		PinterestService.updatePin(pinToEdit, $routeParams.id).then(() => {
			console.log("pinToEdit", pinToEdit);
			$location.path("/pins");
		}).catch((error) => {
			console.log("error in submitNewPin", error);
		});
	};





});


