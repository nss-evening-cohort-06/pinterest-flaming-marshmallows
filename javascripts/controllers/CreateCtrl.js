'use strict';

app.controller("CreateCtrl", function ($location, $rootScope, $scope, PinterestService) {
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