'use strict';

app.service("PinterestService", function ($http, $q, $rootScope, FIREBASE_CONFIG) {
  const getBoards = (userUid) => {
    let boards = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbBoards = results.data;
        Object.keys(fbBoards).forEach((key) => {
          fbBoards[key].id = key;
          boards.push(fbBoards[key]);
        });
        resolve(boards);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getPins = (userUid) => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards/pins.json`).then((results) => {
        let fbPins = results.data;
        Object.keys(fbPins).forEach((key) => {
          fbPins[key].id = key;
          pins.push(fbPins[key]);
        });
        resolve(pins);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getSingleBoard = (boardId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`);
  };

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards/.json`, JSON.stringify(newBoard));
  };

  const deleteBoard = (boardId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`);
  };

  const updateBoard = (board, boardId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`, JSON.stringify(board));
  };

  const postNewPin = (newPin) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards/pins.json`, JSON.stringify(newPin));
  };

  const updatePin = (pin, pinId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/boards/pins/${pinId}.json`, JSON.stringify(pin));
  };

  const deletePin = (pinId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/pins/${pinId}.json`);
  };

  return { getBoards, getPins, getSingleBoard, postNewBoard, postNewPin, deleteBoard, deletePin, updateBoard, updatePin };

});