"use strict";

app.controller("SingleBoardCtrl", function($location, $routeParams, $scope, PinterestService) {

	const showPinsForSingleBoard = () => {
		PinterestService.getAllPinsWithSingleBoard($routeParams.id).then((results) => {
            $scope.pinsWithIds = results;
            PinterestService.getSingleBoard($routeParams.id).then((results) => {
                $scope.boardName = results.data.name;
            }).catch(() => {
                
            });
            
        });
	};

	showPinsForSingleBoard();

	$scope.goToCreatePin = () => {
        $location.path(`/pincreate/${$routeParams.id}`);
    };
});