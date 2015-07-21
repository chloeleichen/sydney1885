var oldSydney = angular.module('oldSydney', ['ngRoute', 'firebase','appControllers', 'ngMap']);
var appControllers = angular.module('appControllers', ['firebase', 'ngMap']);

oldSydney.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'mainController'
    }).
    when('/about', {
      templateUrl: 'app/about/about.html'
    }).
    when('/contact', {
      templateUrl: 'app/contact/contact.html'
    }).
    otherwise({
      redirectTo: '/'
    });

}]);
