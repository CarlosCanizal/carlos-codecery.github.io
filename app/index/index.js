angular.module('myApp.controllers')
.controller('IndexController',['$rootScope','$scope','$state','Parse', function($rootScope,$scope,$state, Parse){

  $scope.sendEmail = function(){
    if($scope.keepMePostForm.$valid){
      Parse.sendEmail($scope.email).then(function(success){
        $scope.success = success;
        $scope.email = null;
        $scope.keepMePostForm.$setPristine();
      },function(error){
        $scope.error = error;
      });
    }
  };


}]);