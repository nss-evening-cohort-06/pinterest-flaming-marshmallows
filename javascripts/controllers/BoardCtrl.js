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

  $scope.deletePinsFromBoard = (boardId) => {
    PinterestService.getAllPinsWithSingleBoard(boardId).then((pins) => {
        pins.forEach((pin) => {
            deletePins(pin.id);
        });        
        deleteBoard(boardId);         
    }).catch((err) => {
        console.log("err in getAllPinsWithSingleBoard:", err);
    });                      
  };
    const deletePins = (pinId) => {
        PinterestService.deletePin(pinId).then(() => {            
        }).catch((err) => {
            console.log("error in deletePin:", err);
        });
    };

    const deleteBoard = (boardId) => {
        PinterestService.deleteBoard(boardId).then((results) => {
            getBoards();
        }).catch((err) => {
            console.log("err in deleteBoard:", err);
        });
    };

    $scope.editBoard = (boardId) => {
        $location.path(`/singleBoard/edit/${boardId}`);
    };

});