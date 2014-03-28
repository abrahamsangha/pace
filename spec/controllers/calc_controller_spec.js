describe("controller: CalcController (vanilla jasmine, javascript)", function() {
  
  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, $rootScope) {
    this.scope = $rootScope.$new();
    $controller('CalcController', {
      $scope: this.scope,
    });
    this.scope.calc = {};
  }));

  describe("calculatePace", function() {
    it("should assign calc.PaceOnly with the correct pace", function() {
      this.scope.calc.timingForPace = 60
      this.scope.calc.distanceForPace = 60
      this.scope.calculatePace();
      expect(this.scope.calc.paceOnly).toEqual((1.00).toFixed(2));
    });

    it("should not assign calc.PaceOnly if timing is <= 0", function() {
      this.scope.calc.timingForPace = 0
      this.scope.calc.distanceForPace = 60
      this.scope.calculatePace();
      expect(this.scope.calc.paceOnly).toEqual(undefined);      
    })
  });

  describe("calculateDistance", function() {
    it("should assign calc.distanceOnly with the correct distance", function() {
      this.scope.calc.timingForDistance = 60
      this.scope.calc.paceForDistance = 6
      this.scope.calculateDistance();
      expect(this.scope.calc.distanceOnly).toEqual((10.00).toFixed(2));
    });
  });

});
