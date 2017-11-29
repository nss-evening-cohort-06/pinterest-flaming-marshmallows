'use strict';

app.controller("BoardCtrl", function ( $location, $rootScope, $scope, PinterestService ) {

    const getBoards = () => {
        PinterestService.SOMEFUNC().then((results) => {
            $rootScope.uid = results.uid;
            console.log("results in getFbBoards:", results);
        }).catch((err) => {
            console.log("err in getFbBoards:", err);
        });
    };
    getBoards();

    const getPins = () => {
        PinterestService.SOMEFUNC().then((results) => {
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
        $location.path(`/createBoard`);
    };

});