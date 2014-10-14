angular.module('myApp.controllers')
.controller('MenuStoreController',['$rootScope','$scope','$state','Parse','ShoppingCart', function($rootScope,$scope,$state,Parse,ShoppingCart){
  
  $scope.logIn = function(){
    Parse.logIn();
  };

}]);