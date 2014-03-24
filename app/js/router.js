angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/pace', {
    templateUrl: 'calc.html',
    controller: 'CalcController'
  });

  $routeProvider.otherwise({ redirectTo: '/pace' });

});
