'use strict';

app.controller("BoardCtrl", function ($routeParams, $location, $rootScope, $scope, PinterestService) {

    const getBoards = () => {
        PinterestService.getBoards($rootScope.uid).then((results) => {
            $scope.boards = results;
        }).catch((error) => {
            console.log("Error in PinterestService.getboards()", error);
        });
    };
    getBoards();

    const getPins = () => {
        PinterestService.getPins().then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("err in getPins:", err);
        });
    };
    getPins();

  $scope.viewSingleBoard = (boardName) => {
    $location.path(`/singleBoard/${boardName}`);
  };

  $scope.goToCreateBoard = () => {      
    $location.path(`/singleBoard/create`);
  };

    $scope.deleteBoard = (boardId) => {
        console.log("boardId:", boardId);
    };

    $scope.goToCreatePin = () => {
        $location.path(`/pincreate/${$routeParams.id}`);
    };

});