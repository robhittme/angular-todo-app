angular.module('todoAngularApp')
  .controller('AboutCtrl', function($scope, $stateParams, userInformationSvc){

    function getSingleUser(userId){
      $scope.singleUser = userInformationSvc.getSingleUser(userId);

    }

    $scope.editUser = function($routeParams.userId){
      userInformationSvc.editUser();
    }
    getSingleUser($stateParams.userId);
  })
