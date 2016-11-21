angular.module('todoAngularApp')
  .controller('AboutCtrl', function($scope, $stateParams, userInformationSvc){

    function getSingleUser(userId){
      $scope.singleUser = userInformationSvc.getSingleUser(userId);

    }
    
    getSingleUser($stateParams.userId);
  })
