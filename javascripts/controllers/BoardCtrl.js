'use strict';

app.controller("BoardCtrl", function ( $location, $rootScope, $routeParams, $scope, PinterestService ) {

    $scope.board = {};

    const getBoards = () => {
        PinterestService.getBoards($rootScope.uid).then((results) => {
        $scope.boards = results;
        console.log("boards results:", results);
        }).catch((error) => {
        console.log("Error in PinterestService.getboards()", error);
        });
    };
    getBoards();

    const getPins = () => {
        PinterestService.getPins().then((results) => {
            $scope.pins = results;
            console.log("results in getPins:", results);
        }).catch((err) => {
            console.log("err in getPins:", err);
        });
    };
    getPins();

    $scope.viewSingleBoard = (boardId) => {
        PinterestService.getSingleBoard($routeParams.id).then((results) => {
            $scope.board = results.data;
            $location.path(`/singleBoard/${boardId}`);
        }).catch((error) => {
            console.log("error in viewSingleBoard", error);
        });
        
    };

    $scope.goToCreateBoard = () => {
        $location.path(`/singleBoard/create`);
    };

});