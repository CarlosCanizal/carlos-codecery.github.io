// Declare the main module
var myApp = angular.module('myApp', [
  'ngAnimate',
  'ui.router',
  'LocalStorageModule',
  'myApp.controllers',
  'myApp.directives',
  'myApp.services',
]);

// // Initialize the main module
myApp.run(['$rootScope', function ($rootScope) {
  
}]);

// Configure the main module
myApp.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  'use strict';

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl : 'app/index/index.tpl.html',
    controller  : 'IndexController'
  });
  $urlRouterProvider.otherwise('/');
}]);

angular.module('myApp.controllers',[]);
angular.module('myApp.directives',[]);
angular.module('myApp.services',[]);
