var app = angular.module('todoAngularApp');

app.controller('MainCtrl', function($scope, $location, userInformationSvc){


  $scope.greetings = "hello fellow traveler!";

  function getAllUsers(){
    $scope.users = userInformationSvc.getUsers();
  }

  $scope.saveUser = function(username){
    userInformationSvc.addUser(username);
    $scope.username = '';
  }

  $scope.deleteUser = function(userId){
    userInformationSvc.deleteUser(userId);
  }

  $scope.viewUser = function(userId){
    $location.url('/about/' + userId);
  }

  getAllUsers();

});
