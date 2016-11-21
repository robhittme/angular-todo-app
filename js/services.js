'use strict';


angular.module('todoAngularApp')
.factory('userInformationSvc', function($q, $http){
  var factory = {};
  var users = [{
    "id": 1,
    "first_name": "Roger",
    "last_name": "Mendoza",
    "email": "rmendoza0@wordpress.com"
  }, {
    "id": 2,
    "first_name": "Kathryn",
    "last_name": "Stewart",
    "email": "kstewart1@nba.com"
  }, {
    "id": 3,
    "first_name": "Helen",
    "last_name": "Reyes",
    "email": "hreyes2@nasa.gov"
  }, {
    "id": 4,
    "first_name": "William",
    "last_name": "Parker",
    "email": "wparker3@springer.com"
  }, {
    "id": 5,
    "first_name": "Eric",
    "last_name": "Lane",
    "email": "elane4@adobe.com"
  }, {
    "id": 6,
    "first_name": "Anne",
    "last_name": "Ellis",
    "email": "aellis5@shutterfly.com"
  }, {
    "id": 7,
    "first_name": "Theresa",
    "last_name": "Mcdonald",
    "email": "tmcdonald6@lulu.com"
  }, {
    "id": 8,
    "first_name": "Fred",
    "last_name": "White",
    "email": "fwhite7@weebly.com"
  }, {
    "id": 9,
    "first_name": "Christina",
    "last_name": "Meyer",
    "email": "cmeyer8@wix.com"
  }, {
    "id": 10,
    "first_name": "Ruby",
    "last_name": "Reed",
    "email": "rreed9@weibo.com"
  }];
  factory.getUsers = function(){
    return users;
  };

  factory.addUser = function(newUser){
    newUser.id = Math.floor(Math.random()*100);
    console.log(newUser);
    users.push(newUser);
    return users;
  };

  factory.deleteUser = function(userId){
    for (var i = 0; i < users.length; i++) {
      if(users[i].id == userId){
        users.splice(i, 1);
      }
    }
  }

  factory.updateUser = function(userInfo){

  }

  factory.getSingleUser = function(userId){
    for (var i = 0; i < users.length; i++) {
      if(users[i].id == userId){
        return users[i];
      }


    }
  }



  return factory;

})
