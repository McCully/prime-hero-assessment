var myApp = angular.module('myApp' , ['ngRoute']);

myApp.config(['$routeProvider' , function($routeProvider){
  $routeProvider

  .when('/heroList' ,{
    templateUrl: '/views/templates/heroList.html',
    controller: 'heroListController'
  })
  .when('/heroCreate' , {
    templateUrl: '/views/templates/heroCreate.html',
    controller: 'heroCreateController'
  })
  .otherwise({
    redirectTo: 'heroList'
  })
}]);
