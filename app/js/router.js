angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/pace', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.otherwise({ redirectTo: '/pace' });

});
