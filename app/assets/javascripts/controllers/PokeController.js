app.controller('PokeController', ['$scope',
  function($scope) {
    $scope.active = true;
}]);


app.controller('PokeResultController', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location) {
	console.log("result");
    if ($routeParams.query) {
      var query = $routeParams.query.toLowerCase();
      console.log(query);
      // do backend call here
	} else {
      $scope.info = {};
	}
}]);