'use strict';

app.controller("CreateCtrl", function ($routeParams, $location, $rootScope, $scope, PinterestService) {
  
    $scope.submitNewPin = (pin) => {
        let newPin = createPinObject(pin);
        PinterestService.postNewPin(newPin).then((results) => {
        });
    };
    const createPinObject = (pin) => {
      return {
      "name": pin.name,
      "board_id": $routeParams.id,
      "tried": pin.tried ? pin.tried : false,
      "url": pin.url
      };
    };

  $scope.submit = function () {
    let newBoard = $scope.board;
    $scope.board.uid = $rootScope.uid;
    PinterestService.postNewBoard(newBoard).then(() => {
      $location.path('/home');
    }).catch((error) => {
      console.log("Error in submit", error);
    });
  };
});