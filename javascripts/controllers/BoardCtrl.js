'use strict';

app.controller("BoardCtrl", function ( $location, $rootScope, $routeParams, $scope, PinterestService ) {

    $scope.board = {};
    $scope.pins = {};

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

    $scope.viewSingleBoard = (board) => {
        PinterestService.getPins().then((results) => {
            $scope.pins = results;
            console.log("$scope.pins", $scope.pins);
        let pinsWithIds = [];
        console.log("board.name", `${board.name}`);
        //$location.path(`/singleBoard/${boardId}`);
        $scope.pins.forEach((pin) => {
            if(`${board.name}` === pin.board_id) {
            pinsWithIds.push($scope.pins);
            }
        });
            console.log("pinsWithIds", pinsWithIds);
        });
        
        
    };

  $scope.goToCreateBoard = () => {
    $location.path(`/singleBoard/create`);
  };

    $scope.deleteBoard = (boardId) => {
        console.log("boardId:", boardId);
    };

});