'use strict';

app.controller("TriedCtrl", function ($rootScope, $scope, PinterestService) {

  const getPins = () => {
    PinterestService.getTriedPins($rootScope.uid).then((results) => {
      $scope.pins = results;
    }).catch((err) => {
      console.log("error in getTriedPins", err);
    });
  };

  getPins();

  $scope.makeTried = (pin, pinId) => {
    pin.tried = pin.tried ? false : true;
    let triedPin = PinterestService.createPinObj(pin);
    PinterestService.updatePin(triedPin, pinId).then(() => {
      getPins();
    }).catch((err) => {
      console.log('error in updatePin:', err);
    });
  };

});