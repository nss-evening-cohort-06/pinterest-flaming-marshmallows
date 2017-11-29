'use strict';

let isAuth = (AuthService) => new Promise((resolve, reject) => {
  if (AuthService.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/auth", {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when("/home", {
      templateUrl: 'partials/home.html',
      controller: 'BoardCtrl',
      resolve: { isAuth }
    })
    .when("/singleBoard", {
      templateUrl: 'partials/singleBoard.html',
      controller: 'BoardCtrl',
      resolve: { isAuth }
    })
    .when("/singleBoard/edit/:id", {
      templateUrl: 'partials/singleBoard/editBoard.html',
      controller: 'EditCtrl',
      resolve: { isAuth }
    })
    .when("/singleBoard/create", {
      templateUrl: 'partials/singleBoard/createBoard.html',
      controller: 'CreateCtrl',
      resolve: { isAuth }
    })
    .when("/pins", {
      templateUrl: 'partials/pins.html',
      controller: 'PinCtrl',
      resolve: { isAuth }
    })
    .when("/pins/edit/:id", {
      templateUrl: 'partials/editPin.html',
      controller: 'EditCtrl',
      resolve: { isAuth }
    })
    .when("/pins/create", {
      templateUrl: 'partials/createPin.html',
      controller: 'CreateCtrl',
      resolve: { isAuth }
    })
    .when("/tried", {
      templateUrl: 'partials/tried.html',
      controller: 'TriedCtrl',
      resolve: { isAuth }
    })

    .otherwise("/auth");
});