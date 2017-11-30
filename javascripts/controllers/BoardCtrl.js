'use strict';

app.controller("BoardCtrl", function ($location, $rootScope, $scope, PinterestService) {

  const getBoards = () => {
    PinterestService.getBoards($rootScope.uid).then((results) => {
      $scope.boards = results;
      // console.log("boards results:", results);
    }).catch((error) => {
      console.log("Error in PinterestService.getboards()", error);
    });
  };
  getBoards();

  const getPins = () => {
    PinterestService.getPins().then((results) => {
      $scope.pins = results;
      // console.log("results in getPins:", results);
    }).catch((err) => {
      console.log("err in getPins:", err);
    });
  };
  getPins();

  $scope.viewSingleBoard = (boardId) => {
    $location.path(`/singleBoard/${boardId}`);
  };

  $scope.goToCreateBoard = () => {
    $location.path(`/singleBoard/create`);
  };

});