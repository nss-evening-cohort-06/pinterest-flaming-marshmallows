"use strict";

app.controller("SingleBoardCtrl", function($location, $rootScope, $routeParams, $scope, PinterestService) {
	$scope.board = {};

	const getBoard = () => {
        PinterestService.getSingleBoard($routeParams.id).then((results) => {
            $scope.board = results;
            console.log("in viewSingleBoard", $scope.board);
        }).catch((error) => {
            console.log("error in viewSingleBoard", error);
        });
        
    };


    // $scope.showPinsForSingleBoard = (event, boardId) => {
    //     getBoard();
    //     let singleBoardId = $scope.board.id;
    //     console.log("boardId in showPinsForSingleBoard", singleBoardId);        
    //     PinterestService.getPins().then((pins) => {
    //         let pinId = pins.board_id;
    //         singleBoardId.forEach((pin)=>{
    //         if(pinId === singleBoardId) {
    //             console.log("pins from showPinsForSingleBoard", pins);
    //             }
    //         });
    //     });
    // };

getBoard();

});

