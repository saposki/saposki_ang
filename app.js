// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONFIG
angularApp.config(function ($routeProvider){
//
   $routeProvider

   .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
   })
   .when('/crasher', {
      templateUrl: 'pages/crasher.html',
      controller: 'crasherController'
   })
   .when('/portrait', {
      templateUrl: 'pages/portrait.html',
      controller: 'portraitController'
   })
   .when('/street', {
      templateUrl: 'pages/street.html',
      controller: 'streetController'
   })
//
});

// // CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function($scope, $log){

}]);

angularApp.controller('secondController', ['$scope','$log', function($scope, $log){

}]);
