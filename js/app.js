'use strict';

var app = angular.module('todoAngularApp', ['ui.router', 'ngRoute']);

app.config(function($stateProvider){



  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    })
    .state('about/:userId', {
      url: '/about/:userId',
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    })

})
