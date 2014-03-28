angular.module("app").controller('CalcController', function($scope) {

  $scope.calculate = function() {
    var timing = $scope.calc.timing;
    var distance = $scope.calc.distance;
    var pace = $scope.calc.pace;
    $scope.calc.pace = timing / distance;
    $scope.calc.distance = timing / pace;
  };

  $scope.calculatePace = function() {
    var timing = $scope.calc.timingForPace;
    var distance = $scope.calc.distanceForPace;
    if ( timing > 0) {
      $scope.calc.paceOnly = (timing / distance).toFixed(2);
    }
  };

  $scope.calculateDistance = function() {
    var timing = $scope.calc.timingForDistance;
    var pace = $scope.calc.paceForDistance;
    $scope.calc.distanceOnly = (timing / pace).toFixed(2);
  };
});
