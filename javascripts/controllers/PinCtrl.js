'use strict';

app.controller("PinCtrl", function ($event, $rootScope, $scope, PinterestService) {

  const showPins = () => {
    PinterestService.getPins($rootScope.uid).then((results) => {
      $scope.pins = results;
    }).catch((error) => {
      console.log("Error in PinterestService", error);
    });
  };


  showPins();

  

});