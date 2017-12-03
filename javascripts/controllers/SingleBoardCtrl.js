"use strict";

app.controller("SingleBoardCtrl", function($location, $routeParams, $scope, PinterestService) {

	const showPinsForSingleBoard = () => {
		PinterestService.getAllPinsWithSingleBoard($routeParams.id).then((results) => {
            $scope.pinsWithIds = results;
            $scope.boardName = $routeParams.id;
        });
	};

	showPinsForSingleBoard();

	$scope.goToCreatePin = () => {
        $location.path(`/pincreate/${$routeParams.id}`);
    };
});