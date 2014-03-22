angular.module("app").controller('LoginController', function($scope) {
  $scope.calc = { timing: undefined, distance: undefined, pace: undefined };

  $scope.calculate = function() {
    var timing = $scope.calc.timing
    var distance = $scope.calc.distance
    var pace = $scope.calc.pace
    $scope.calc.pace = timing / distance
    $scope.calc.distance = timing / pace
  };
});
