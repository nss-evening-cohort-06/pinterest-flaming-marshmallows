'use strict';

app.controller("PinCtrl", function ($location, $rootScope, $scope, $routeParams, PinterestService) {

    const getPins = () => {
        PinterestService.getPins($rootScope.uid).then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("error in getPins", err);
        });
    };

    getPins();

    $scope.deletePin = (pinId) => {
        PinterestService.deletePin(pinId).then((results) => {
            getPins();
        }).catch((err) => {
            console.log("error in deletePin", err);
        });
    };
    
    $scope.editPin = (PinId) => {
        $location.path(`/boards/pins/edit/${$routeParams.id}`);
    };

    $scope.makeTried = (pin, pinId) => {
        pin.tried = pin.tried ? false : true;
        let triedPin = PinterestService.createPinObj(pin);
        PinterestService.updatePin(triedPin, pinId).then(() => {
            getPins();
        }).catch((err) => {
            console.log('error in updatePin:', err);
        });
    };

    $scope.moveToTried = (boardId) => {
        $location.path(`/boards/tried/${$routeParams.id}`);
    };


    $scope.pinDetail = (pinId) => {
        $location.path(`/pin/${pinId}`);
    };
});
