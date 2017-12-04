'use strict';

app.controller("EditCtrl", function ($location, $routeParams, $scope, PinterestService) {

	const getPinInfo = () => {
		PinterestService.getSinglePin($routeParams.id).then((results) => {
			$scope.pin = results.data;
		}).catch((error) => {
			console.log("error in getSinglePin", error);
		});
	};

	getPinInfo();

	$scope.submitNewPin = (pin, pinId) => {
		let pinToEdit = PinterestService.createPinObj(pin);
		PinterestService.updatePin(pinToEdit, $routeParams.id).then(() => {
			$location.path("/pins");
		}).catch((error) => {
			console.log("error in submitNewPin", error);
		});
	};

	$scope.submitNewPinToSingleBoard = (board, pin, pinId) => {
		let pinToEdit = PinterestService.createPinObj(pin);
		PinterestService.updatePin(pinToEdit, $routeParams.id).then(() => {
			$location.path(`/singleBoard/${board.name}`);
		}).catch((error) => {
			console.log("error in submitNewPin", error);
		});
	};

	$scope.submitNewPinToTriedBoard = (pin, pinId) => {
		let pinToEdit = PinterestService.createPinObj(pin);
		PinterestService.updatePin(pinToEdit, pin.id).then(() => {
			$location.path("/tried");
		}).catch((error) => {
			console.log("error in submitNewPin", error);
		});
	};

	const getBoardInfo = () => {
		PinterestService.getSingleBoard($routeParams.id).then((results) => {
			$scope.board = results.data;
		}).catch((error) => {
			console.log("error in getSingleBoard", error);
		});
	};

	getBoardInfo();

	$scope.submitNewBoard = (board, boardId) => {
		let boardToEdit = PinterestService.createBoardObj(board);
		PinterestService.updateBoard(boardToEdit, $routeParams.id).then(() => {
			$location.path("/home");
		}).catch((error) => {
			console.log("error in submitNewBoard", error);
		});
	};

});


