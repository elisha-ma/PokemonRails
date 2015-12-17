var app = angular.module('PokeApp', [
  'templates',
  'ngRoute',
  'ngAnimate',
  'ngResource'
]);

app.config([ '$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "index.html",
    controller: 'PokeController'
  })
  .when('/pokeResult/:query', {
    templateUrl: "pokeInfo.html",
    controller: 'PokeResultController'
  })
}]);
