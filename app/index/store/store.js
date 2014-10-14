angular.module('myApp.controllers')
.controller('StoreController',['$rootScope','$scope','$state','Parse','ShoppingCart', function($rootScope,$scope,$state,Parse,ShoppingCart){

  Parse.getProducts().then(function(products){
    $scope.loading = false;
    $scope.products = products;
  },function(error){
    $scope.loading = false;
    console.log(error.message);
  });

  $scope.logIn = function(){

    if(Parse.currentUser()){
      $state.go('dashboard');
      return;
    }
    
    Parse.logIn().then(function(user){
      $state.go('dashboard');
    });
  };

}]);