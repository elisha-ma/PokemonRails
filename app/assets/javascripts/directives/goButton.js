app.directive('goButton', function() {
  return {
    restrict: 'E',
    scope: {
      query: '='
    },
    templateUrl: 'goButton.html',
    link: function(scope, element, attrs) {
      scope.buttonText = "go!",
      scope.showInfo = function() {
    	  console.log(scope.query);
    	  //window.location("/pokeResult").search('query', query);
    	  //window.location = "/pokeResult/" + scope.query;
    	  window.location = "#/pokeResult/" + scope.query;
      }
    }
  };
});