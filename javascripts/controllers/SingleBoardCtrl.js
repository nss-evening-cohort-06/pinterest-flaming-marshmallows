"use strict";

app.controller("SingleBoardCtrl", function($routeParams, $scope, PinterestService) {

	const showPinsForSingleBoard = () => {
		PinterestService.getAllPinsWithSingleBoard($routeParams.id).then((results) => {
            $scope.pinsWithIds = results;
            $scope.boardName = $routeParams.id;
            console.log("in get single board pinsWithIds", $scope.pinsWithIds);
        });
	};

	showPinsForSingleBoard();


	





});