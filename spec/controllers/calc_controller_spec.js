describe("controller: CalcController (vanilla jasmine, javascript)", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, $rootScope) {
    this.scope = $rootScope.$new();
    $controller('CalcController', {
      $scope: this.scope,
    });
  }));

  describe("doing stuff like this", function() {
    it("should do some good stuff", function() {
      expect(this.scope).toBeDefined();
    });

    it("should do something", function() {
      // this.scope.calculate();
      expect(true).toBe(true);
    });
  });
});
