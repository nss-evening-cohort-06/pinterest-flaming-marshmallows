'use strict';

app.controller("PinCtrl", function ($event, $rootScope, $scope, PinterestService) {

  const showPins = () => {
    PinterestService.getPins($rootScope.uid).then((results) => {
      $scope.pins = results;
    }).catch((error) => {
      console.log("Error in PinterestService", error);
    });
  };


  showPins();

  // $scope.getBoardIdWhenClicked = (board) => {
  //   let boardId = $event.target.board_name;
  //   return boardId;
  // };


  $scope.showPinsForSingleBoard = (pins) => {
    let boardId = $event.target.board_name;
    PinterestService.getPins().then((pinId) => {
      if(pins.board_id === boardId){
        console.log("pins", pins);
      }
    }).catch((error )=> {
      console.log("error in showPinsForSingleBoard", error);
    });

  };

});