'use strict';

app.controller("BoardCtrl", function ( $location, $rootScope, $routeParams, $scope, PinterestService ) {

    $scope.board = {};
    $scope.pins = {};
    $scope.pinsWithIds = {};

    const getBoards = () => {
        PinterestService.getBoards($rootScope.uid).then((results) => {
            $scope.boards = results;
            getPins();
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
    
    $scope.getSingleBoard = (board) => {
        $location.path(`/singleBoard/${board.id}`);
    };

  $scope.goToCreateBoard = () => {      
    $location.path(`/create`);
  };

  $scope.deleteBoard = (boardId) => {
    console.log("boardId:", boardId);
  };

    

});