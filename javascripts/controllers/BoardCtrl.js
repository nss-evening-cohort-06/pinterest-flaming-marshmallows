'use strict';

app.controller("BoardCtrl", function ( $location, $rootScope, $scope, PinterestService ) {

    const getBoards = () => {
        let boards = [];
        PinterestService.getBoards().then((results) => {
            $rootScope.uid = results.uid;
            console.log("results in getFbBoards:", results);
        }).catch((err) => {
            console.log("err in getFbBoards:", err);
        });
    };
    getBoards();

    const getPins = () => {
        PinterestService.getPins().then((results) => {
            console.log("results in getFbPins:", results);
        }).catch((err) => {
            console.log("err in getFbPins:", err);
        });
    };
    getPins();

    $scope.viewSingleBoard = (boardId) => {
        $location.path(`/singleBoard/${boardId}`);
    };

    $scope.goToCreateBoard = () => {
        $location.path(`/singleBoard/create`);
    };

});