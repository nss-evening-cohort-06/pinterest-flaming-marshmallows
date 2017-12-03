'use strict';

app.service("PinterestService", function($http, $q, $rootScope, FIREBASE_CONFIG) {
  const getBoards = (userUid) => {
    let boards = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbBoards = results.data;
        Object.keys(fbBoards).forEach((key) => {
          fbBoards[key].id = key;
          boards.push(fbBoards[key]);
          console.log("boards", boards);
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
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json`).then((results) => {
        let fbPins = results.data;
        Object.keys(fbPins).forEach((key) => {
          fbPins[key].id = key;
          pins.push(fbPins[key]);
        });
        resolve(pins);
        console.log("getPins", pins);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getTriedPins = () => {
    let triedPins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json`).then((results) => {
        let fbPins = results.data;
        Object.keys(fbPins).forEach((key) => {
          fbPins[key].id = key;
          if (fbPins[key].tried) {
            triedPins.push(fbPins[key]);
          }
          resolve(triedPins);
        });
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getAllPinsWithSingleBoard = (board) => {
    let pinsWithIds = [];
    let fbPins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json`).then((results) => {
        fbPins = results.data;
        console.log("fbPins", fbPins);
        Object.keys(fbPins).forEach((key) => {
          if (fbPins[key].board_id === board) {
            fbPins[key].id = key;
            pinsWithIds.push(fbPins[key]);
          }
        });
        console.log("pinsWithIds", pinsWithIds);
        resolve(pinsWithIds);
      }).catch((error) => {
        reject(error);
      });
    });
  };


  const createPinObj = (pin) => {
    return {
      "name": pin.name,
      "board_id": pin.board_id,
      "tried": pin.tried,
      "url": pin.url,
      "uid": $rootScope.uid
    };
  };

  const createBoardObj = (board) => {
    return {
      "description": board.description,
      "name": board.name,
      "uid": $rootScope.uid
    };
  };

  const getSingleBoard = (boardId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`);
  };

  const getSinglePin = (pinId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`);
  };

  const postNewBoard = (newBoard) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard));
  };

  const deleteBoard = (boardId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`);
  };

  const updateBoard = (board, boardId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${boardId}.json`, JSON.stringify(board));
  };

  const postNewPin = (newPin) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify(newPin));
  };

  const updatePin = (pin, pinId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`, JSON.stringify(pin));
  };

  const deletePin = (pinId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`);
  };

  return {
    getBoards,
    getPins,
    getSingleBoard,
    postNewBoard,
    postNewPin,
    deleteBoard,
    deletePin,
    updateBoard,
    updatePin,
    getTriedPins,
    createPinObj,
    createBoardObj,
    getAllPinsWithSingleBoard,
    getSinglePin
  };

});