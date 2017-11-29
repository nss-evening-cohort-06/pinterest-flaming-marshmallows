'use strict';

app.controller("PinCtrl", function ($location, $rootScope, $scope, PinterestServices) {
    $scope.pins = [];

    const getPins = () => {
        PinterestServices.getPins($rootScope.uid).then((results) => {
            $scope.pins = results;
        }).catch((err) => {
            console.log("error in getPins", err);
        });
    };

    getPins();

    $scope.deletePin = (pinId) => {
        PinterestServices.deletePin(pinId).then((results) => {
            getPins();
        }).catch((err) => {
            console.log("error in deletePin", err);
        });
    };

    $scope.pinDetail = (pinId) => {
        $location.path(`/pin/${pinId}`);
    };
});
